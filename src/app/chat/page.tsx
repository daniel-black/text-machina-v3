import { Message } from "@/utils/zod";
import Chat from "@/components/chat/chat";
import Navbar from "@/components/nav/navbar";
import ChatProvider from "@/components/providers/chat-provider";

type ChatPageProps = {
  searchParams: { id: string } | undefined;
}

export default function ChatPage({ searchParams }: ChatPageProps) {
  let existingMessages: Message[] = [{
    role: 'system',
    content: 'You are a world class programmer. You have seen every pattern and every optimization. Answer questions to the best of your abilities and always respond in Markdown.'
  }];

  if (searchParams?.id) {
    // existingMessages = await db.chat.getMessages(searchParams.id)
  }

  return (
    <ChatProvider>
      {/* Navbar here in the page instead of the layout so we can grab that searchParam chatId easy */}
      <Navbar />
      <Chat
        chatId={searchParams?.id}
        existingMessages={existingMessages}
      />
    </ChatProvider>
  );
}