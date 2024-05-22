"use client";
import { register } from "@/lib/action.js";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  // Si l'inscription réussie, rediriger vers la page de connexion
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="flex flex-col gap-4 w-[400px]">
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        name="username"
        className="p-2 bg-slate-100 outline-cyan-200"
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Adresse email"
        name="email"
        className="p-2 bg-slate-100 outline-cyan-200"
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        className="p-2 bg-slate-100 outline-cyan-200"
      />
      <input
        type="password"
        name="cpassword"
        placeholder="Confirmer mot de passe"
        className="p-2 bg-slate-100 outline-cyan-200"
      />
      {/* <input
          type="file"
          name="img"
          className="p-2 bg-slate-100 outline-cyan-200"
        /> */}
      <button className="bg-cyan-300 p-2">Je m'inscris</button>
      <p className="text-center text-sm text-red-500 font-semibold">
        {state?.error}
      </p>

      <Link href={"/login"} className="w-full text-center">
        <small>
          Vous avez déjà un compte ? <strong>Connectez-vous !</strong>
        </small>
      </Link>
    </form>
  );
};

export default RegisterForm;
