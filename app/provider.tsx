'use client';

import React, { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => (
  <>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      {children}
    </MantineProvider>
  </>
);

export default Providers;
