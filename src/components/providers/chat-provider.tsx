'use client'

import type { Model } from "@/utils/zod";
import { LayoutProps } from "@/app/layout";
import { createContext, useState } from "react";

export type ChatContextType = {
  model: Model;
  setModel: (newModel: Model) => void;
};

export const ChatContext = createContext<ChatContextType>({
  model: 'gpt-4',
  setModel: () => {}
});

export default function ChatProvider({ children }: LayoutProps) {
  const [chatContextValue, setChatContextValue] = useState<{ model: Model }>({
    model: 'gpt-4',
  });

  function setModel(model: Model) {
    setChatContextValue({ model });
  }

  return (
    <ChatContext.Provider
      value={{
        model: chatContextValue.model,
        setModel: setModel 
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}