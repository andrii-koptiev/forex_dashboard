import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forex-Dashboard',
};

export default function RootLayout({
  users,
  children,
}: Readonly<{
  users: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-dark-blue ${openSans.className}`}>
        {children}
        {users}
        <div id='modal-root' />
      </body>
    </html>
  );
}
