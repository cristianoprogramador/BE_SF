import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { userResolvers } from "./domain/Users/resolvers/userResolvers";
import { projectResolvers } from "./domain/Projects/resolvers/projectResolvers";
import { userTypes } from "./domain/Users/types/userTypes";
import { projectTypes } from "./domain/Projects/types/projectTypes";

const prisma = new PrismaClient();

const typeDefs = gql`
  type Query {
    users: [User]
    projects: [Project]
  }

  type Mutation {
    createUser(
      name: String
      birthDate: String
      position: String
      salary: Float
    ): User
    createProject(name: String, startDate: String): Project
  }

  type User {
    id: Int
    name: String
    birthDate: String
    position: String
    salary: Float
    projects: [Project]
  }

  type Project {
    id: Int
    name: String
    startDate: String
    users: [User]
  }
`;

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...projectResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...projectResolvers.Mutation,
  },
  User: {
    projects: userResolvers.User.projects,
  },
  Project: {
    users: projectResolvers.Project.users,
  },
};

const server = new ApolloServer({
  typeDefs: [typeDefs, userTypes, projectTypes],
  resolvers,
  context: () => ({
    prisma,
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
