// import '@mantine/core/styles.css';
import React from 'react';
import Providers from './provider';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
