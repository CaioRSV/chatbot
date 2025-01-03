import { auth, signIn, signOut } from "../auth"

import Test from "./components/test";

export default async function SessionHandler() {
    const session = await auth()

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center text-white gap-2">
        {session ? <Test/> : <p>Not logged in</p>}
        <form
            action={async () => {
                "use server"
                await signIn("github", { redirectTo: "/"});
            }}
        >
            <button className={`p-1 bg-slate-300 rounded-md`} type="submit">LOGAR GITHUB</button>
        </form>

        <form
            action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/"});
            }}
        >
            <button className={`p-1 bg-slate-300 rounded-md`} type="submit">LOGAR GOOGLE</button>
        </form>
        
        <form
            action={async () => {
                "use server"
                await signOut();
            }}
        >
            <button className={`p-1 bg-red-300 rounded-md`} type="submit">DESLOGAR</button>
        </form>
    </div>
  );
}
