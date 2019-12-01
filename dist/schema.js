"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = require("./schemas/schema.gql");
const graphql_tools_1 = require("graphql-tools");
const resolverMap_1 = require("./resolverMap");
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: resolverMap_1.default,
});
exports.default = schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxpREFBcUQ7QUFDckQsK0NBQXNDO0FBR3RDLE1BQU0sTUFBTSxHQUFrQixvQ0FBb0IsQ0FBQztJQUMvQyxRQUFRO0lBQ1IsU0FBUyxFQUFULHFCQUFTO0NBQ1osQ0FBQyxDQUFDO0FBRUgsa0JBQWUsTUFBTSxDQUFDIn0=