import { container } from "tsyringe";
import { type ChangeStatusUsersService } from "./changeStatusUsers.service";
import { EDIT_USERS_LIST_MOCK } from "../repositories/repositoryMock";

describe("service: ChangeStatusUsersService", () => {
  it("should edit an existing user", async () => {
    const service = container.resolve<ChangeStatusUsersService>(
      "ChangeStatusUsersService"
    );

    const userId = 1;
    const editUserData = {
      status: "Inactive",
    };

    const result = await service.execute(userId, editUserData);

    const editedUser = EDIT_USERS_LIST_MOCK.find((user) => user.id === userId);

    expect(result).toStrictEqual(editedUser);
  });
});
