import { gql } from "apollo-server";

export const userTypes = gql`
  type User {
    id: Int
    name: String
    birthDate: String
    position: String
    salary: Float
    projects: [Project]
    imageUrl: String
    email: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(
      name: String
      birthDate: String
      position: String
      email: String
      salary: Float
    ): User
  }
`;
