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
      className="w-full flex space-x-3 p-3 bg-zinc-100 border-t border-zinc-300"
    >
      <textarea
        ref={textareaRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full h-fit rounded-lg px-3 py-2 resize-x-none outline-none border border-zinc-300 bg-zinc-50 transition-all duration-75 ease-in-out"
        spellCheck={false}
        rows={1}
      />
      <button
        className="bg-[#218aff] border border-[#218aff] text-white w-10 h-10 rounded-lg flex justify-center items-center"
      >
        →
      </button>
    </form>
  );
}