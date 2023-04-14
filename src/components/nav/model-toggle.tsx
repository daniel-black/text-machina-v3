'use client';

import { useContext } from "react";
import { ChatContext, ChatContextType } from "../providers/chat-provider";

export default function ModelToggle() {
  const { model, setModel } = useContext<ChatContextType>(ChatContext);
  const isGpt4 = model === 'gpt-4';

  return (
    <div className="flex flex-col space-y-1.5 text-sm p-1.5 rounded bg-zinc-200 shadow-inner text-zinc-500">
      <button
        className={`w-full p-2 text-left rounded sm:text-center border border-transparent ${isGpt4 ? 'hover:border-zinc-50' : 'bg-zinc-50 shadow border-zinc-100'} transition-all duration-100 ease-in-out`}
        onClick={() => setModel('gpt-3.5-turbo')}
      >
        GPT-3.5-Turbo
      </button>
      <button
        className={`w-full p-2 text-left rounded sm:text-center border border-transparent ${isGpt4 ? 'bg-zinc-50 shadow border-zinc-100' : 'hover:border-zinc-50'}  transition-all duration-100 ease-in-out`}
        onClick={() => setModel('gpt-4')}
      >
        GPT-4
      </button>
    </div>
  );
}