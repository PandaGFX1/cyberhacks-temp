
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { LoadingScreen } from '@/components/loading-screen';

export const metadata: Metadata = {
  title: 'CYBERHACKS | Elite Cyber Security Team',
  description: 'The premier CTF team CYBERHACKS. Rising through the ranks of CTFTime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground min-h-screen">
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
