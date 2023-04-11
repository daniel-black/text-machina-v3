import { LayoutProps } from "../layout";
import Menu from "@/components/menu/menu";
import MessageInput from "@/components/chat/message-input";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <Menu />
      <main className="grow bg-zinc-700 p-3 flex flex-col">
        <div className="grow">{children}</div>
        <MessageInput />
      </main>
    </div>
  );
}