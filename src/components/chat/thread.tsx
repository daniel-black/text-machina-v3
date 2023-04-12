import { Message } from "@/utils/zod";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ThreadProps = {
  messages: Message[];
};

export default function Thread({ messages }: ThreadProps) {
  
  return (
    <div className="grow overflow-y-auto bg-zinc-200 p-5 shadow-inner md:rounded-bl-lg md:border-b md:border-l md:border-zinc-300">
      <ul className="space-y-5">
        {messages.map((message, index) => <MessageBubble key={index} message={message} />)}
      </ul>
    </div>
  );
}

type MessageBubbleProps = {
  message: Message;
};

function MessageBubble({ message }: MessageBubbleProps) {
  const isSystem = message.role === 'system';
  const isUser = message.role === 'user';

  return (
    <div
      className={`
        flex
        ${isSystem ? 'justify-center' : ''}
        ${isUser ? 'justify-end ' : 'justify-start'}
      `}
    >
      <div
        className={`
        ${isSystem ? 'bg-zinc-100 text-zinc-500' : isUser ? 'bg-[#218aff] text-[#fdfdfd]' : 'bg-zinc-50 text-zinc-600'}
          px-5 py-4 rounded-2xl shadow ${isSystem ? 'w-full' : 'max-w-[90%]'}
          overflow-x-auto space-y-2 leading-relaxed
        `}
      >
        {isSystem ? (
          <>
            <p className="text-xs">system message:</p>
            <p className="text-sm">{message.content}</p>
          </>
        ) : (
          <ReactMarkdown>
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}