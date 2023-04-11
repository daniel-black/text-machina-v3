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
      <body>
        {children}
      </body>
    </html>
  );
}
