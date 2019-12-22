import * as fs from 'fs';
import * as path from 'path';
import { gql } from 'apollo-server-core';
import { makeExecutableSchema } from 'graphql-tools';

const baseQueryTypeDefs = gql(
    fs.readFileSync(path.join(__dirname, `./base.gql`), 'utf-8')
);

const rawSchema = {
        typeDefs: [
            baseQueryTypeDefs,
        ],
        resolvers: {
            Query: {
                helloWorld: (_, __, {}) => {
                    return 'Hello, world';
                }
            },
            Mutation: {},
        },
   }

export const schema = makeExecutableSchema(rawSchema);
