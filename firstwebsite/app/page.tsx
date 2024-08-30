'use client';

import { useState } from 'react';
import { Raleway, Sora } from 'next/font/google';

// Fonts
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export default function Page() {
  const [message, setMessage] = useState('Hello, welcome to my portfolio!');

  return (
    <html lang="en">
      <body className={`${raleway.variable} ${sora.variable}`}>
        <div>
          <h1>{message}</h1>
          <button onClick={() => setMessage('Thanks for visiting!')}>
            Click me
          </button>
        </div>
      </body>
    </html>
  );
}
