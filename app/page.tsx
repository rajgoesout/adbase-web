'use client';

import { Web3Provider } from "./Web3Provider";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';
import Example from "@/components/ui/form";

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { users, newOffset } = await getUsers(search, Number(offset));

  // const { address, isConnecting, isDisconnected } = useAccount();
  // if (isConnecting) return <div>Connecting...</div>;
  // if (isDisconnected) return <div>Disconnected</div>;
  // return <div>Connected Wallet: {address}</div>;
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      {/* <Web3Provider>
        <ConnectKitButton />
      </Web3Provider> */}
      voila <br />
      create your first Ad
      <Example />
      {/* <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable users={users} offset={newOffset} /> */}
    </main>
  );
}
