import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { userResolvers } from "./domain/Users/resolvers/userResolvers";
import { projectResolvers } from "./domain/Projects/resolvers/projectResolvers";
import { userTypes } from "./domain/Users/types/userTypes";
import { projectTypes } from "./domain/Projects/types/projectTypes";

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: [userTypes, projectTypes],
  resolvers: [userResolvers, projectResolvers],
  context: () => ({
    prisma,
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
