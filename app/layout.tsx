'use client';


import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import './globals.css';


import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { NavItem } from './nav-item';
import Home from '@geist-ui/icons/home';

// export const metadata = {
//   title: 'Next.js App Router + NextAuth + Tailwind CSS',
//   description:
//     'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    // <DynamicContextProvider
    // settings={{
    //   environmentId: '5cdefb9e-9f44-426a-a986-459f1a5b7ea8',
    //   walletConnectors: [ EthereumWalletConnectors ],
    // }}>
    // <DynamicWidget />
      <html lang="en" className="h-full bg-gray-50">
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {/* <Web3Provider> */}
          <DynamicContextProvider
          settings={{
            environmentId: '5cdefb9e-9f44-426a-a986-459f1a5b7ea8',
            walletConnectors: [ EthereumWalletConnectors ],
          }}>
          {/* <DynamicWidget /> */}
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
              <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                  <div className="flex h-[60px] items-center border-b px-5">
                    <Link
                      className="flex items-center gap-2 font-semibold"
                      href="/"
                    >
                      <Logo />
                      <span className="">Adbase</span>
                    </Link>
                  </div>
                  <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                      <NavItem href="/">
                        <Home className="h-4 w-4" />
                        Home
                      </NavItem>
                      {/* <NavItem href="/users">
                        <UsersIcon className="h-4 w-4" />
                        Users
                      </NavItem> */}
                      <NavItem href="/settings">
                        <SettingsIcon className="h-4 w-4" />
                        Settings
                      </NavItem>
                      {/* <NavItem href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs">
                        <VercelLogo className="h-4 w-4" />
                        Deploy
                      </NavItem> */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
                  <Link
                    className="flex items-center gap-2 font-semibold lg:hidden"
                    href="/"
                  >
                    <Logo />
                    <span className="">Adbase</span>
                  </Link>
                  {/* <User /> */}
                  {/* <ConnectKitButton /> */}
                  <DynamicWidget />
                </header>
                {children}
              </div>
            </div>
            <Analytics />
          </DynamicContextProvider>
          {/* </Web3Provider> */}
        </body>
      </html>
    // </DynamicContextProvider>
    // </ClerkProvider>
  );
}
