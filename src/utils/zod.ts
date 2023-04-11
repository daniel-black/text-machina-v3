import { z } from "zod";

export const roles = ['system', 'user', 'assistant'] as const;
export const RoleEnum = z.enum(roles);
export type Role = z.infer<typeof RoleEnum>;

export const MessageSchema = z.object({
  role: RoleEnum,
  content: z.string().trim()
});
export type Message = z.infer<typeof MessageSchema>;

export const MessagesSchema = z.array(MessageSchema);