import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import * as cors from 'cors';
import compression from 'compression';
import depthLimit from 'graphql-depth-limit';
import { resolvers, typeDefs } from './executeable-schemas'


const app = express();

const server = new ApolloServer({
    resolvers,
    typeDefs,
    validationRules: [depthLimit(7)],
    context: ({ req, res }) => ({
        req,
        res,
    })
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: 'graphql' });

const httServer = createServer(app);

httServer.listen(
    { port: 8080 },
    (): void => console.log(`Running in http://localhost:8080/graphql`)
);