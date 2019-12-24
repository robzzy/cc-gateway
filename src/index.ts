import * as express from 'express';

import { kinopio, namekoRpcContextMiddleware } from './middleware/rpc';
import { ApolloServer, Config } from 'apollo-server-express';
import { schema } from './executable-schemas';


const port = process.env.PORT || 8080;

const serverConfig: Config = {
    schema,
    context: ({ req, res }) => ({
        req,
        res,
        rpc: req.rpc,
        locale: req.locale,
    }),
};

const server = new ApolloServer(serverConfig);

const app = express();

async function createApp() {
    await kinopio.connect();
    app.use(namekoRpcContextMiddleware);
    server.applyMiddleware({app, path: '/graphql'});

    return app
}

createApp()
    .then(app => {
        app.listen(port, () => {
            console.log(`Server ready at http://localhost:8080/graphql`);
        });
    })
