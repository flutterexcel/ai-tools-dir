'use client';

import { ReactNode } from 'react';
import Header from '@/components/Header';
import { SessionProvider } from 'next-auth/react';
import { ToolsProvider } from '@/contexts/ToolsContext';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ToolsProvider>
          <Header />
          <main className="p-4">{children}</main>
      </ToolsProvider>
    </SessionProvider>
  );
};

export default Layout;
