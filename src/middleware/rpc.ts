import { Kinopio } from 'kinopio';
import * as Raven from 'raven';
import { camelizeKeys } from 'humps';
import acceptLanguage from 'accept-language';
import { isString, toLower } from 'lodash';


export const kinopio = new Kinopio({
    hostname: process.env.RABBIT_SERVER,
    port: parseInt(process.env.RABBIT_PORT, 5672),
    vhost: process.env.RABBIT_VHOST,
    username: process.env.RABBIT_USER,
    password: process.env.RABBIT_PASS,
    onResponse: result => {
        Raven.captureBreadcrumb({
            message: 'received rpc reply',
            level: 'info',
            category: 'rpc',
            data: { result },
        });
    },

    onRequest: (svcName, functionName, payload) => {
        Raven.captureBreadcrumb({
            message: `calling rpc: ${svcName}.${functionName}()`,
            level: 'info',
            category: 'rpc',
            data: { functionName, payload, serviceName: svcName },
        });
    },

    processResponse: response => camelizeKeys(response),
    queuePrefix: 'rpc.reply-cc-gateway',
});

acceptLanguage.languages([
    'en-us',
    'en-gb',
    'zh-cn',
    'de-de',
    'el-cy',
    'el-gr',
    'es-es',
    'es-la',
    'fr-fr',
    'it-it',
    'ja-jp',
    'ko-kr',
    'pt-br',
    'ru-ru',
    'th-th',
    'tr-tr',
    'vi-vn',
    'zh-hk',
    'zh-tw',
]);

export function namekoRpcContextMiddleware(req, _, next) {
    const workerCtx = {
        'nameko.call_id_stack': ['cc-gateway'],
        'content_type': 'application/json',
    };

    if (req.auth) {
        workerCtx['nameko.authorization'] = req.auth;
    }

    const acceptLanguageHeader = req.get('Accept-Language');
    if (isString(acceptLanguageHeader)) {
        const language = toLower(acceptLanguage.get(acceptLanguageHeader));
        workerCtx['nameko.locale'] = language;
        workerCtx['nameko.language'] = language;
        req.locale = language
    }
    req.rpc = kinopio.buildRpcProxy(workerCtx);
    // console.log('rpc context:\n%j', workerCtx);

    next();
}
