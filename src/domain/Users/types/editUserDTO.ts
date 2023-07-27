import { type User } from "@prisma/client";

export type IEditUserDTO = Partial<
  Omit<User, "id" | "createdAt" | "email" | "status">
>;
