import { handleGithubLogin } from "@/lib/action.js";
import { auth, signIn } from "@/lib/auth.js";

import LoginForm from "@/components/LoginForm.jsx";
import { login } from "@/lib/action.js";
import Link from "next/link.js";

const page = async () => {
  const session = await auth();
  // console.log(session);

  return (
    <>
      <div className="px-10 flex items-center justify-center">
        <form
          action={handleGithubLogin}
          className="flex flex-col gap-4 w-[400px] border p-3 font-semibold bg-slate-100 text-cyan-400"
        >
          <button>Se connecter avec Github</button>
        </form>
      </div>
      <div className="px-10 flex items-center justify-center">
        <LoginForm />
      </div>
    </>
  );
};

export default page;
