'use client'

import { LayoutProps } from "@/app/layout";
import { Model } from "@/utils/zod";
import { createContext } from "react";

export type ChatContextType = { model: Model };

const initialChatContextValue = { model: 'gpt-4' } as const;

export const ChatContext = createContext<ChatContextType>(initialChatContextValue);

export default function ChatProvider({ children }: LayoutProps) {
  return (
    <ChatContext.Provider value={initialChatContextValue}>
      {children}
    </ChatContext.Provider>
  );
}