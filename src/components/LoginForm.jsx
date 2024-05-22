"use client";
import { login } from "@/lib/action.js";
import Link from "next/link.js";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction} className="flex flex-col gap-4 w-[400px]">
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
      <p className="text-center text-sm text-red-500 font-semibold">
        {state?.error}
      </p>
      <Link href={"/register"} className="w-full text-center">
        <small>
          Vous n'avez pas de compte ? <strong>Inscrivez-vous !</strong>
        </small>
      </Link>
    </form>
  );
};

export default LoginForm;
