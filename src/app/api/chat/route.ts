import { MessagesSchema } from "@/utils/zod";
import { NextRequest } from "next/server";
import { OpenAI } from "openai-streams";

export const runtime = 'edge';

export async function GET() {
  const stream = await OpenAI('chat', {
    model: 'gpt-3.5-turbo',
    messages: [
      { "role": "system", "content": "You are a programming assistant." },
      { "role": "user", "content": "Write a JavaScript isOdd function." }
    ],
  });

  return new Response(stream);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = MessagesSchema.parse(body);

  const stream = await OpenAI('chat', {
    model: 'gpt-4',
    messages: messages,
  });

  return new Response(stream);
}