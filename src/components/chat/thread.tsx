import { Message } from "@/utils/zod";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ThreadProps = {
  messages: Message[];
};

export default function Thread({ messages }: ThreadProps) {
  
  return (
    <div className="grow overflow-y-auto">
      <ul className="space-y-3">
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
        ${isSystem ? 'bg-zinc-600 text-zinc-400' : isUser ? 'bg-[#218aff] text-[#fdfdfd]' : 'bg-[#d8d8d8] text-black'}
          bg-rose-400 py-3 px-4 rounded-xl shadow ${isSystem ? 'w-full' : 'max-w-[90%]'}
          overflow-x-auto
        `}
      >
        {isSystem ? (
          <>
            <p className="text-sm">system message:</p>
            <p>{message.content}</p>
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