'use client';

import type { Message } from "@/utils/zod";
import { useState } from "react";
import Thread from "./thread";
import MessageInput from "./message-input";
import { Decoder, getResponseStream } from "@/utils/stream";

type ChatProps = {
  chatId: string | undefined;
  existingMessages: Message[];
};

export default function Chat(props: ChatProps) {
  // const [chatId, setChatId] = useState<string | undefined>(() => props.chatId);
  const [messages, setMessages] = useState<Message[]>(() => props.existingMessages);
  const [gptResponse, setGptResponse] = useState<string>('');

  async function handleMessages(newMessage: Message) {
    // add new message to messages
    setMessages((messages) => [...messages, newMessage]);

    // call API
    const stream = await getResponseStream([...messages, newMessage]);

    // read stream
    const reader = stream.getReader();
    let streamedContent = '';
    
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        reader.releaseLock();
        break;
      }

      const decodedData = Decoder.decode(value);
      streamedContent += decodedData;
      setGptResponse(gptResponse => gptResponse + decodedData);
    }

    setMessages((messages) => [...messages, { role: 'assistant', content: streamedContent }]);
    setGptResponse(() => '');

    // TODO: save to DB
  }
  
  return (
    <div className="grow flex flex-col">
      <Thread
        messages={gptResponse === '' ? messages : [...messages, { role: 'assistant', content: gptResponse }]}
      />
      <MessageInput handleSend={handleMessages} />
    </div>
  );
}