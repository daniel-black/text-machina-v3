import { LayoutProps } from "../layout";
import Menu from "@/components/menu/menu";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <Menu />
      <main className="grow max-w-full bg-zinc-700 p-3 flex flex-col">
        {children}
      </main>
    </div>
  );
}