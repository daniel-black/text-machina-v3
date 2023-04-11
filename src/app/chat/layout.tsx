import { LayoutProps } from "../layout";
import Menu from "@/components/menu/menu";
import MessageInput from "@/components/chat/message-input";

//{ children }: LayoutProps

export default function ChatLayout(props: any) {
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <Menu />
      <main className="grow bg-zinc-700 p-3 flex flex-col">
        <div className="grow">{JSON.stringify(props.segment, null, 2)}</div>
        <MessageInput />
      </main>
    </div>
  );
}