import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_, __): string {
            return `Hello, world!`;
        }
    }
}

export default resolverMap;