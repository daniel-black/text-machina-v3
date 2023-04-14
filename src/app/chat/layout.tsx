import { LayoutProps } from "../layout";
import ScreenContainer from "@/components/container/screen-container";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <ScreenContainer>
      {children}
    </ScreenContainer>
  );
}