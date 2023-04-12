import { LayoutProps } from "../layout";
import Menu from "@/components/menu/menu";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <Menu />
      <main className="grow w-full flex flex-col">
        {children}
      </main>
    </div>
  );
}