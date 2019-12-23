import * as fs from 'fs';
import * as path from 'path';
import { gql } from 'apollo-server-core';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

const baseQueryTypeDefs = gql(
    fs.readFileSync(path.join(__dirname, `./base.gql`), 'utf-8')
);

const baseResolvers = {
    Query: {
        helloWorld: (_, __, {}) => {
            return 'Hello, world';
        }
    },
    Mutation: {}, 
};

const fetchCustomSchemaResolver = (folder) => {
    const customTypeDefs = [];
    const customResolvers = [];
    const folders = fs.readdirSync(path.join(__dirname, folder));
    folders.forEach(f => {
        const typeDef = gql(fs.readFileSync(path.join(__dirname, `${folder}/${f}/schema.gql`), 'utf-8'));
        customTypeDefs.push(typeDef);
        try {
            const { resolvers } = require(`${folder}/${f}/resolvers`);
            customResolvers.push(resolvers);
        } catch {
            return
        }
    })
    return {
        customTypeDefs,
        customResolvers: merge({}, ...customResolvers)
    }
};

const { customTypeDefs, customResolvers } = fetchCustomSchemaResolver('../schemas');

const typeDefs = [
    baseQueryTypeDefs,
    ...customTypeDefs
]

const resolvers = merge(
    baseResolvers,
    customResolvers
)

const rawSchema = {
        typeDefs: typeDefs,
        resolvers: resolvers,
   }

export const schema = makeExecutableSchema(rawSchema);
