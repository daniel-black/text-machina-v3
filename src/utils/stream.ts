import type { Message, Model } from "./zod";

export const Decoder = new TextDecoder();

export async function getResponseStream(messages: Message[], model: Model) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({
      messages,
      model,
    }),
  });

  if (!res.ok || !res.body) {
    throw new Error(res.statusText);
  }

  return res.body;
}