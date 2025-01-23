"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.GreetTypeDefs = (0, apollo_server_1.gql) `
  type Query{
    greet: String
  }

  type Mutation { 
     addGreet: String
  }

`;
