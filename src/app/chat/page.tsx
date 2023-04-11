import Thread from "@/components/chat/thread";

type ChatPageProps = {
  searchParams: { id: string } | undefined;
}

export default function ChatPage({ searchParams }: ChatPageProps) {
  if (!searchParams?.id) {
    return (
      <div>Start chatting</div>
    );
  }

  return (
    <div>
      <p>chat page</p>
      <p>chat id: {searchParams.id}</p>
      <Thread />
    </div>
  );
}