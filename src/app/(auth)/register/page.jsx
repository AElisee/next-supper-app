import { register } from "@/lib/action.js";
import React from "react";

const page = () => {
  return (
    <div className="px-10 flex items-center justify-center">
      <form action={register} className="flex flex-col gap-4 w-[400px]">
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
      </form>
    </div>
  );
};

export default page;
