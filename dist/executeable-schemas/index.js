"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const apollo_server_core_1 = require("apollo-server-core");
// import { merge } from 'loadsh';
const baseQueryTypeDefs = apollo_server_core_1.gql(fs.readFileSync(path.join(__dirname, `./base.gql`), 'utf-8'));
exports.typeDefs = [
    baseQueryTypeDefs,
];
exports.resolvers = [{
        Query: {
            helloWorld: (_, __, {}) => {
                return `Hello, World!`;
            }
        },
        Mutation: {}
    }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhlY3V0ZWFibGUtc2NoZW1hcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsMkRBQXlDO0FBQ3pDLGtDQUFrQztBQUdsQyxNQUFNLGlCQUFpQixHQUFHLHdCQUFHLENBQ3pCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQy9ELENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBbUI7SUFDcEMsaUJBQWlCO0NBQ3BCLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxDQUFDO1FBQ3RCLEtBQUssRUFBRTtZQUNILFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU8sZUFBZSxDQUFDO1lBQzNCLENBQUM7U0FDSjtRQUNELFFBQVEsRUFBRSxFQUVUO0tBQ0osQ0FBQyxDQUFDIn0=