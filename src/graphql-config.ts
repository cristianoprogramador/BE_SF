import { projectTypes } from "./domain/Projects/typeDefs";
import { userTypes } from "./domain/Users/typeDefs";

import { projectResolvers } from "./domain/Projects/resolvers";
import { userResolvers } from "./domain/Users/resolvers";

export const typeDefs = [userTypes, projectTypes];

export const resolvers = [userResolvers, projectResolvers];
