import { SessionProvider } from "next-auth/react"
import SessionHandler from "./sessionHandler";

export default function Home() {
  return (
      <div className="w-full h-full">
        <SessionProvider>
          <SessionHandler/>
        </SessionProvider>
      </div>
  );
}
