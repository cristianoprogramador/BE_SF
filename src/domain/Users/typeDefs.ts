import gql from "graphql-tag";

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
    status: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(
      name: String!
      birthDate: String!
      position: String!
      email: String!
      salary: Float!
      imageUrl: String
    ): User
    editUser(input: EditUserData): User
    statusChangeUser(input: statusChangeUserData): User
  }

  input EditUserData {
    id: Int!
    name: String
    birthDate: String
    position: String
    salary: Float
    imageUrl: String
  }

  input statusChangeUserData {
    id: Int!
    status: String!
  }
`;
