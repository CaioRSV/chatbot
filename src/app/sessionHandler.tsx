"use client";

import { useSession } from "next-auth/react"

export default function SessionHandler() {
    const {data: session} = useSession();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center gap-2">
        <p>teste</p>
        <p>{session?.user?.name}</p>
    </div>
  );
}
