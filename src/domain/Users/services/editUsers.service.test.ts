import { container } from "tsyringe";
import { EDIT_USERS_LIST_MOCK } from "../repositories/repositoryMock";
import { type EditUsersService } from "./editUsers.service";

describe("service: EditUsersService", () => {
  it("should edit an existing user", async () => {
    const service = container.resolve<EditUsersService>("EditUsersService");

    const userId = 1;
    const editUserData = {
      name: "Christopher",
    };

    const result = await service.execute(userId, editUserData);

    const editedUser = EDIT_USERS_LIST_MOCK.find((user) => user.id === userId);

    expect(result).toEqual(editedUser);
  });
});
