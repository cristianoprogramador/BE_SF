import { container } from "tsyringe";
import { PROJECTS_LIST_MOCK } from "../repositories/repositoryMock";
import { type GetProjectsByUserIdService } from "./getProjectsByUserId.service";

describe("service: GetProjectsByUserIdService", () => {
  it("should return projects associated with a user", async () => {
    const service = container.resolve<GetProjectsByUserIdService>(
      "GetProjectsByUserIdService"
    );
    const userId = 1;
    const result = await service.execute(userId);

    expect(result).toStrictEqual(PROJECTS_LIST_MOCK);
  });

  it("should return an empty array if the user has no projects", async () => {
    const service = container.resolve<GetProjectsByUserIdService>(
      "GetProjectsByUserIdService"
    );

    const userId = 3;
    const result = await service.execute(userId);

    expect(result).toStrictEqual([]);
  });
});
