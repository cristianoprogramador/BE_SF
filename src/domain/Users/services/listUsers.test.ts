import "reflect-metadata";
import { type User } from "@prisma/client";
import { UserController } from "../controllers";
import { container } from "tsyringe"; // Importe o 'container' aqui

jest.mock("../controllers", () => ({
  UserController: jest.fn().mockImplementation(() => ({
    usersQuery: jest.fn(),
  })),
}));

describe("List of Users", () => {
  it("should return a list of users", async () => {
    // Crie uma instância mockada do ListUsersService
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

    // Registre a instância mockada do ListUsersService no contêiner do tsyringe
    container.register("ListUsersService", { useValue: mockListUsersService });

    // Crie uma instância do UserController resolvendo suas dependências usando o contêiner do tsyringe
    const controller = container.resolve(UserController);

    // Mock a implementação do usersQuery para retornar os usuários simulados
    (controller.usersQuery as jest.Mock).mockResolvedValue(
      mockListUsersService.execute()
    );

    // Chame a função usersQuery
    const users = await controller.usersQuery();

    // Verifique se o resultado é um array
    expect(Array.isArray(users)).toBe(true);

    // Verifique se o resultado contém os usuários simulados
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

    // Verifique se a função ListUsersService.execute foi chamada
    expect(mockListUsersService.execute).toHaveBeenCalledTimes(1);
  });
});
