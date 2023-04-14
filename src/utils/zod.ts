import { z } from "zod";

export const roles = ['system', 'user', 'assistant'] as const;
export const RoleEnum = z.enum(roles);
export type Role = z.infer<typeof RoleEnum>;

export const models = ['gpt-3.5-turbo', 'gpt-4'] as const;
export const ModelEnum = z.enum(models);
export type Model = z.infer<typeof ModelEnum>;

export const MessageSchema = z.object({
  role: RoleEnum,
  content: z.string().trim()
});
export type Message = z.infer<typeof MessageSchema>;

export const MessagesSchema = z.array(MessageSchema);

export const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema),
  model: ModelEnum,
});