import { Message, MessageSchema } from "@/utils/zod";
import { useCallback, useRef } from "react";

type MessageInputProps = {
  handleSend: (newMessage: Message) => void;
}

export default function MessageInput({ handleSend }: MessageInputProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = useCallback(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, [textareaRef]);

  const handleBlur = useCallback(() => {
    if (textareaRef.current) textareaRef.current.blur();
  }, [textareaRef]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!textareaRef.current?.value) {
      return
    }

    handleSend(MessageSchema.parse({
      role: 'user',
      content: textareaRef.current.value,
    }));

    textareaRef.current.value = '';
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex space-x-3 bg-zinc-900"
    >
      <textarea
        ref={textareaRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full rounded-lg px-3 py-2 resize-x-none outline-none shadow bg-zinc-100 text-zinc-900 hover:bg-zinc-50 focus:bg-zinc-50 focus:ring focus:ring-zinc-400 transition-all duration-75 ease-in-out"
        spellCheck={false}
      />
      <button
        className="bg-zinc-800 w-20 rounded-lg flex justify-center items-center"
      >
        SEND
      </button>
    </form>
  );
}