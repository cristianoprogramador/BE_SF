import "reflect-metadata";
import { container } from "tsyringe";
import { PROJECTS_LIST_MOCK } from "../repositories/repositoryMock";
import { type GetProjectsByUserIdService } from "./getProjectsByUserId.service";

describe("Get Projects By User ID", () => {
  it("should return projects associated with a user", async () => {
    const service = container.resolve<GetProjectsByUserIdService>(
      "GetProjectsByUserIdService"
    );
    const userId = 1;
    const result = await service.execute(userId);

    expect(result).toEqual(PROJECTS_LIST_MOCK);
  });

  it("should return an empty array if the user has no projects", async () => {
    const service = container.resolve<GetProjectsByUserIdService>(
      "GetProjectsByUserIdService"
    );

    const userId = 3;
    const result = await service.execute(userId);

    expect(result).toEqual([]);
  });
});
