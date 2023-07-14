import { type Project } from "@prisma/client";

export type ICreateProjectDTO = Omit<Project, "id" | "createdAt">;
