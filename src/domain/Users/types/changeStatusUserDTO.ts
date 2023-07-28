import { type User } from "@prisma/client";

export type IChangeStatusUserDTO = Pick<User, "status">;
