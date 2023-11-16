import { container } from "tsyringe";
import { CREATE_USER_LIST_MOCK } from "../repositories/repositoryMock";
import { type CreateUsersService } from "./createUsers.service";

describe("service: CreateUsersService", () => {
  it("should create a new user", async () => {
    const service = container.resolve<CreateUsersService>("CreateUsersService");

    const result = await service.execute(CREATE_USER_LIST_MOCK);

    expect(result).toStrictEqual({
      ...CREATE_USER_LIST_MOCK,
      id: 1,
      createdAt: expect.any(Date),
      status: "Active",
    });
  });
});
