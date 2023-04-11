'use client';

import { MessageSchema } from "@/utils/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";

async function parseStream(stream: ReadableStream) {
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      reader.releaseLock();
      break;
    }
    const decoder = new TextDecoder();
    const decodedData = decoder.decode(value);
    // const parsedData = JSON.parse(decodedData);
    console.log(`|${decodedData}|`);
    // do something with parsedData
  }
}

export default function MessageInput() {
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [response, setResponse] = useState('')

  console.log(response);

  const handleFocus = useCallback(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, [textareaRef]);

  const handleBlur = useCallback(() => {
    if (textareaRef.current) textareaRef.current.blur();
  }, [textareaRef]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // send message under these circumstances. print for now
      console.log(textareaRef.current?.value)
    }
  }, [textareaRef]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textareaRef.current?.value) return;
    console.log(textareaRef.current.value);

    if (!searchParams.has('id')) {
      // new chat
      // router.replace(`/chat?id=${'nacho'}`);
    }

    const parsedMessage = MessageSchema.parse({
      role: 'user',
      content: textareaRef.current.value,
    });

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify(parsedMessage),
    });

    if (!res.ok || !res.body) {
      throw new Error(res.statusText);
    }

    const stream = await res.body;
    // parseStream(stream);
    // for await (const chunk of stream) {
    //   // Do something with each "chunk"
    //   console.log(chunk)
    // }

    const reader = stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        reader.releaseLock();
        break;
      }
      const decoder = new TextDecoder();
      const decodedData = decoder.decode(value);
      // const parsedData = JSON.parse(decodedData);
      setResponse(response => response + decodedData);
      // console.log(`|${decodedData}|`);
      // do something with parsedData
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex space-x-3"
    >
      <textarea
        ref={textareaRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-full rounded-lg px-3 py-2 resize-x-none outline-none shadow bg-zinc-100 text-zinc-900 hover:bg-zinc-50 focus:bg-zinc-50 focus:ring focus:ring-zinc-400 transition-all duration-75 ease-in-out"
        spellCheck={false}
      />
      <button
        className="bg-zinc-900 w-20 rounded-lg flex justify-center items-center"
      >
        SEND
      </button>
    </form>
  );
}