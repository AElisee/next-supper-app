import { handleGithubLogin } from "@/lib/action.js";
import { auth, signIn } from "@/lib/auth.js";
import React from "react";

const page = async () => {
  //   const session = await auth();
  //   console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>LOGIN WITH GITHUB</button>
      </form>
    </div>
  );
};

export default page;
