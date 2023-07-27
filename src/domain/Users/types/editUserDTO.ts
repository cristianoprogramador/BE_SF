import { type User } from "@prisma/client";

export type IEditUserDTO = Omit<User, "id" | "createdAt" | "email" | "status">;
