import { DocumentNode } from 'graphql';
import * as fs from 'fs';
import * as path from 'path';
import { gql } from 'apollo-server-core';
// import { merge } from 'loadsh';


const baseQueryTypeDefs = gql(
    fs.readFileSync(path.join(__dirname, `./base.gql`), 'utf-8')
);

export const typeDefs: DocumentNode[] = [
    baseQueryTypeDefs,
];

export const resolvers = [{
    Query: {
        helloWorld: (_, __, {}) => {
            return `Hello, World!`;
        }
    },
    Mutation: {

    }
}];