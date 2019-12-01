"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
const http_1 = require("http");
const cors = require("cors");
const compression_1 = require("compression");
const graphql_depth_limit_1 = require("graphql-depth-limit");
const schema_1 = require("./schema");
const app = express();
const server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    validationRules: [graphql_depth_limit_1.default(7)],
    context: ({ req, res }) => ({
        req,
        res,
    })
});
app.use('*', cors());
app.use(compression_1.default());
server.applyMiddleware({ app, path: 'graphql' });
const httServer = http_1.createServer(app);
httServer.listen({ port: 8080 }, () => console.log(`Running in http://localhost:8080/graphql`));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsaUVBQXFEO0FBQ3JELCtCQUFvQztBQUNwQyw2QkFBNkI7QUFDN0IsNkNBQXNDO0FBQ3RDLDZEQUE2QztBQUM3QyxxQ0FBOEI7QUFHOUIsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQ0FBWSxDQUFDO0lBQzVCLE1BQU0sRUFBTixnQkFBTTtJQUNOLGVBQWUsRUFBRSxDQUFDLDZCQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsR0FBRztRQUNILEdBQUc7S0FDTixDQUFDO0NBQ0wsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFakQsTUFBTSxTQUFTLEdBQUcsbUJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVwQyxTQUFTLENBQUMsTUFBTSxDQUNaLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUNkLEdBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FDdEUsQ0FBQyJ9