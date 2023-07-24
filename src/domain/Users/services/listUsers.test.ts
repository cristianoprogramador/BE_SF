import "reflect-metadata";
import { type User } from "@prisma/client";
import { UserController } from "../controllers";
import { container } from "tsyringe";

jest.mock("../controllers", () => ({
  UserController: jest.fn().mockImplementation(() => ({
    usersQuery: jest.fn(),
  })),
}));

describe("List of Users", () => {
  it("should return a list of users", async () => {
    const mockListUsersService = {
      execute: jest.fn().mockResolvedValue([
        {
          id: 1,
          name: "Usuário 1",
          birthDate: new Date("1992-01-01"),
          createdAt: new Date("1992-01-01"),
          email: "test1@example.com",
          imageUrl: "https://www.google.com.br/teste1",
          position: "test1",
          salary: 3032,
        },
        {
          id: 2,
          name: "Usuário 2",
          birthDate: new Date("1982-02-02"),
          createdAt: new Date("1982-02-02"),
          email: "test2@example.com",
          imageUrl: "https://www.google.com.br/teste2",
          position: "test2",
          salary: 3020,
        },
      ] as User[]),
    };

    container.register("ListUsersService", { useValue: mockListUsersService });

    const controller = container.resolve(UserController);

    (controller.usersQuery as jest.Mock).mockResolvedValue(
      mockListUsersService.execute()
    );

    const users = await controller.usersQuery();

    expect(Array.isArray(users)).toBe(true);

    expect(users).toEqual([
      {
        id: 1,
        name: "Usuário 1",
        birthDate: new Date("1992-01-01"),
        createdAt: new Date("1992-01-01"),
        email: "test1@example.com",
        imageUrl: "https://www.google.com.br/teste1",
        position: "test1",
        salary: 3032,
      },
      {
        id: 2,
        name: "Usuário 2",
        birthDate: new Date("1982-02-02"),
        createdAt: new Date("1982-02-02"),
        email: "test2@example.com",
        imageUrl: "https://www.google.com.br/teste2",
        position: "test2",
        salary: 3020,
      },
    ]);

    expect(mockListUsersService.execute).toHaveBeenCalledTimes(1);
  });
});
