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
  }
`;
