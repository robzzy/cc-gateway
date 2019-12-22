import * as express from 'express';
import { ApolloServer, Config } from 'apollo-server-express';
import { schema } from './executable-schemas';


const port = process.env.PORT || 8080;

const serverConfig: Config = {
    schema,
    context: ({ req, res }) => ({
        req,
        res,
    }),
};

const server = new ApolloServer(serverConfig);

const app = express();

server.applyMiddleware({app, path: '/graphql'});

app.listen(port, () => {
    console.log(`Server ready at http://localhost:8080`);
});