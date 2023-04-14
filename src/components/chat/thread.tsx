import { Message } from "@/utils/zod";
import ScrollToBottom from "./scroll-to-bottom";
import Markdown from "./markdown";

type ThreadProps = {
  messages: Message[];
};

export default function Thread({ messages }: ThreadProps) {
  
  return (
    <div className="overflow-y-auto bg-zinc-200 p-5 pb-[90px]">
      <ul className="space-y-5">
        {messages.map((message, index) => <MessageBubble key={index} message={message} />)}
      </ul>
      <ScrollToBottom messages={messages} />
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
          <Markdown markdown={message.content} />
        )}
      </div>
    </div>
  );
}