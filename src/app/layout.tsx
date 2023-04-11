import SupabaseProvider from '@/components/providers/supabase-provider';
import './globals.css';

export const metadata = {
  title: 'Text Machina',
  description: 'AI Chat Bot',
};

export type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-300 h-screen w-full flex grow flex-col'>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
