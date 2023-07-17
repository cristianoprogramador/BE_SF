import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { projectResolvers } from "./domain/Projects/resolvers";
import { projectTypes } from "./domain/Projects/typeDefs";
import { userResolvers } from "./domain/Users/resolvers";
import { userTypes } from "./domain/Users/typeDefs";
import { prisma } from "./prisma";

interface Context {
  prisma: typeof prisma;
}

const server = new ApolloServer<Context>({
  typeDefs: [userTypes, projectTypes],
  resolvers: [userResolvers, projectResolvers],
});

startStandaloneServer(server, {
  context: async () => ({ prisma }),
  listen: { port: 4000 },
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server running at: ${url}`);
});
