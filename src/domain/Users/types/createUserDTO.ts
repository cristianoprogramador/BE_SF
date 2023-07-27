import { type User } from "@prisma/client";

export type ICreateUserDTO = Omit<User, "id" | "createdAt" | "status">;
