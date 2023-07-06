import { gql } from "apollo-server";

export const projectTypes = gql`
  type Project {
    id: Int
    name: String
    startDate: String
    users: [User]
  }
`;
