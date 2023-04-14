import Sidebar from "@/components/nav/sidebar";
import { LayoutProps } from "../layout";
import ScreenContainer from "@/components/container/screen-container";
import Navbar from "@/components/nav/navbar";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <ScreenContainer>
      <Navbar />
      <main className="grow w-full flex flex-col">
        {children}
      </main>
    </ScreenContainer>
  );
}