import { type Project, type User } from "@prisma/client";
import {
  type IEditUserDTO,
  type ICreateUserDTO,
  type IUserRepository,
} from "../types";
import { injectable } from "tsyringe";

export const USERS_LIST_MOCK = [
  {
    id: 1,
    name: "User 1",
    birthDate: new Date("1985-01-01"),
    createdAt: new Date("1985-01-01"),
    email: "user1@example.com",
    position: "frontend",
    imageUrl: "http://google.com/image/user1.jpg",
    salary: 3500,
    status: "Active",
  },
  {
    id: 2,
    name: "User 2",
    birthDate: new Date("1990-01-01"),
    createdAt: new Date("1990-01-01"),
    email: "user2@example.com",
    position: "backend",
    imageUrl: "http://google.com/image/user2.jpg",
    salary: 3500,
    status: "Inactive",
  },
] satisfies User[];

export const PROJECTS_LIST_MOCK = [
  {
    id: 1,
    name: "Project 1",
    client: "Client Project",
    createdAt: new Date(),
    deliveryDate: new Date(),
    description: "Description",
    startDate: new Date(),
    technologies: "React",
  },
] satisfies Project[];

export const CREATE_USER_LIST_MOCK = {
  name: "Chris Sawyer",
  birthDate: new Date("1990-01-01"),
  position: "Dev FullStack",
  email: "sawyer@email.com",
  salary: 3000,
  imageUrl: "http://google.com/image/user2.jpg",
} satisfies ICreateUserDTO;

export const EDIT_USERS_LIST_MOCK: User[] = [
  {
    id: 1,
    name: "User 1",
    birthDate: new Date("1985-01-01"),
    createdAt: new Date("1985-01-01"),
    email: "user1@example.com",
    position: "frontend",
    imageUrl: "http://google.com/image/user1.jpg",
    salary: 3500,
    status: "Active",
  },
  {
    id: 2,
    name: "User 2",
    birthDate: new Date("1990-01-01"),
    createdAt: new Date("1990-01-01"),
    email: "user2@example.com",
    position: "backend",
    imageUrl: "http://google.com/image/user2.jpg",
    salary: 3500,
    status: "Inactive",
  },
];

@injectable()
export class UserRepositoryMock implements IUserRepository {
  public async getAllUsers() {
    return USERS_LIST_MOCK;
  }

  public async createUser(data: ICreateUserDTO) {
    const newUser = {
      ...data,
      id: 1,
      createdAt: new Date(),
      status: "Active",
    };
    return newUser;
  }

  public async getProjectsByUserId(userId: User["id"]) {
    const user = USERS_LIST_MOCK.find((userMock) => userMock.id === userId);

    if (!user) {
      return [];
    }

    return PROJECTS_LIST_MOCK;
  }

  public async editUser(userId: User["id"], data: IEditUserDTO) {
    const existingUserIndex = EDIT_USERS_LIST_MOCK.findIndex(
      (userMock) => userMock.id === userId
    );

    if (existingUserIndex === -1) {
      throw new Error("User not found");
    }

    EDIT_USERS_LIST_MOCK[existingUserIndex] = {
      ...EDIT_USERS_LIST_MOCK[existingUserIndex],
      ...data,
    };

    return EDIT_USERS_LIST_MOCK[existingUserIndex];
  }
}
