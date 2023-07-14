import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { userResolvers } from "./domain/Users/resolvers/userResolvers";
import { projectResolvers } from "./domain/Projects/resolvers";
import { userTypes } from "./domain/Users/types/userTypes";
import { projectTypes } from "./domain/Projects/typeDefs";

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: [userTypes, projectTypes],
  resolvers: [userResolvers, projectResolvers],
  context: () => ({
    prisma,
  }),
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at: ${url}`);
});
