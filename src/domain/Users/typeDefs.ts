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
      name: String
      birthDate: String
      position: String
      email: String
      salary: Float
    ): User
    editUser(id: Int, input: EditUserInput): User
  }

  input EditUserInput {
    name: String
    birthDate: String
    position: String
    email: String
    salary: Float
    imageUrl: String
  }
`;
