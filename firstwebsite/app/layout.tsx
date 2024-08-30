import './globals.css';
import { Raleway, Sora } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata = {
  title: 'My Vercel Website',
  description: 'A basic demo website built with Next.js and deployed on Vercel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
