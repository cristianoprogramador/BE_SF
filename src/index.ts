import "module-alias/register";
import "reflect-metadata";
import "./containers";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql-config";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server running at: ${url}`);
});
