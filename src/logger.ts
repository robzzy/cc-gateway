import { createLogger, format, transports } from 'winston';
import * as moment from 'moment';

const myFormatter = format.printf( (info) => {
    return `${info.timestamp} [${info.level.toUpperCase()}] [${info.service}] [${info.moduleName}] ${info.message}`
})

const serviceNameFormat = format((info) => {
    info.service = "cc-gateway";
    return info;
})

const timestampFormat = format((info) => {
    info.timestamp = moment().format('YYYY-MM-DD HH:MM:SS');
    return info;
})

const logger = createLogger({
    level: process.env.logLevel || 'info',
    format: format.combine(
        format.splat(),
        serviceNameFormat(),
        timestampFormat(),
        myFormatter,
    ),
    transports: [
        new transports.Console(),
    ],
    exceptionHandlers: [new transports.Console()]
})

export function getLogger(moduleName: string) {
    return new Proxy(logger, {
        get(target, logLevel) {
            return (...args) => {
                target[logLevel](...args, { moduleName })
            }
        }
    })
}
