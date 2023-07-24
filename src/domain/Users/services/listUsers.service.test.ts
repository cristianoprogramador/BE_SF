import { container } from "tsyringe";
import { USERS_LIST_MOCK } from "../repositories/repositoryMock";
import { type ListUsersService } from "./listUsers.service";

describe("List of Users", () => {
  it("should return a list of users with projects", async () => {
    const service = container.resolve<ListUsersService>("ListUsersService");

    const result = await service.execute();

    expect(result).toStrictEqual(USERS_LIST_MOCK);
  });
});
