// import { handleGithubLogin } from "@/lib/action.js";
// import { auth, signIn } from "@/lib/auth.js";
// import React from "react";

import { login } from "@/lib/action.js";

const page = async () => {
  //   const session = await auth();
  //   console.log(session);

  return (
    // <div>
    //   <form action={handleGithubLogin}>
    //     <button>LOGIN WITH GITHUB</button>
    //   </form>
    //   </div>
    <div className="px-10 flex items-center justify-center">
      <form action={login} className="flex flex-col gap-4 w-[400px]">
        <input
          type="email"
          placeholder="Adresse email"
          name="email"
          className="p-2 bg-slate-100 outline-cyan-200"
          autoComplete="off"
          autoFocus
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="p-2 bg-slate-100 outline-cyan-200"
        />

        <button className="bg-cyan-600 p-2 text-white font-semibold">
          Je me connecte
        </button>
      </form>
    </div>
  );
};

export default page;
