"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./resolvers"); // Import the resolvers
const gqlTypeDefs_1 = require("./gqlTypeDefs"); // Import the combined typeDefs
const server = new apollo_server_1.ApolloServer({
    typeDefs: gqlTypeDefs_1.default, // Use the combined typeDefs
    resolvers: // Use the combined typeDefs
    resolvers_1.resolvers, // Add your resolvers
});
const startServer = async () => {
    const { url } = await server.listen();
    return `Server ready at ${url}`;
};
console.log(startServer());
