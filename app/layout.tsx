// import '@mantine/core/styles.css';
import React from 'react';
import Providers from './provider';

export const metadata = {
  title: 'iMedia',
  description: 'iMedia entertainment',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
