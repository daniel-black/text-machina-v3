'use client';

import { Message } from "@/utils/zod";
import { useEffect, useRef } from "react";

type ScrollToBottomProps = {
  messages: Message[];
}

export default function ScrollToBottom({ messages }: ScrollToBottomProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  return <div className="h-0 w-0" ref={bottomRef} />;
}