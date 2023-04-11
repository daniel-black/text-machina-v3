import { Message } from "./zod";

export const Decoder = new TextDecoder();

export async function getResponseStream(messages: Message[]) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify(messages),
  });

  if (!res.ok || !res.body) {
    throw new Error(res.statusText);
  }

  return res.body;
}