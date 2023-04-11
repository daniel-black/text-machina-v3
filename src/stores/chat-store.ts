import { Message } from "@/utils/zod";
import { create } from "zustand";

interface ChatStore {
  messages: Message[];
  chatId: string | undefined;
  isStreaming: boolean;
  actions: {
    setChatId: (newChatId: string | undefined) => void;
    setIsStreaming: (bool: boolean) => void
    clearMessages: () => void;
    addMessage: (message: Message) => void;
    appendToLastMessageContent: (content: string) => void;
  };
};

// Don't export the entire store
const useChatStore = create<ChatStore>()((set) => ({
  messages: [],
  chatId: undefined,
  isStreaming: false,
  actions: {
    setChatId: (newChatId) => set({ chatId: newChatId }),
    setIsStreaming: (bool) => set({ isStreaming: bool }),
    clearMessages: () => set({ messages: [] }),
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    appendToLastMessageContent: (content) => set((state) => ({
      messages: [
        ...state.messages.slice(0, state.messages.length - 1),
        {
          role: state.messages.slice(-1)[0].role,
          content: state.messages.slice(-1)[0].content + content,
        },
      ],
    })),
  }
}));

// State hooks
export const useMessages = () => useChatStore(state => state.messages);
export const useChatId = () => useChatStore(state => state.chatId);
export const useIsStreaming = () => useChatStore(state => state.isStreaming);

// Actions hook
export const useChatActions = () => useChatStore(state => state.actions);
// usage: const { addMessage } = useChatActions();