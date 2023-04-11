'use client';

import { useMessages } from "@/stores/chat-store";

export default function Thread() {
  const messages = useMessages();

  return (
    <div className="bg-zinc-950">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.role}: {message.content}</li>
        ))}
      </ul>
    </div>
  );
}