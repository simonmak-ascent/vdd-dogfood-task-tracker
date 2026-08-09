import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title must be between 1 and 200 characters").max(200),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  status: z.enum(["pending", "completed"]).optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
