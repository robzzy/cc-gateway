"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const executeable_schemas_1 = require("./executeable-schemas");
const graphql_tools_1 = require("graphql-tools");
const resolverMap_1 = require("./resolverMap");
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: executeable_schemas_1.typeDefs,
    resolvers: resolverMap_1.default,
});
exports.default = schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFpRDtBQUNqRCxpREFBcUQ7QUFDckQsK0NBQXNDO0FBR3RDLE1BQU0sTUFBTSxHQUFrQixvQ0FBb0IsQ0FBQztJQUMvQyxRQUFRLEVBQVIsOEJBQVE7SUFDUixTQUFTLEVBQVQscUJBQVM7Q0FDWixDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==