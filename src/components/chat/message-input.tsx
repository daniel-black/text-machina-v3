'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

export default function MessageInput() {
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textareaRef.current?.value) return;
    console.log(textareaRef.current.value);

    if (!searchParams.has('id')) {
      // new chat
      // router.replace(`/chat?id=${'nacho'}`);
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