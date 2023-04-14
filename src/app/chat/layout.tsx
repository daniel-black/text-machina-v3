import { LayoutProps } from "../layout";
import ScreenContainer from "@/components/container/screen-container";
import Navbar from "@/components/nav/navbar";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <ScreenContainer>
      <Navbar />
      {children}
    </ScreenContainer>
  );
}