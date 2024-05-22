"use client";
import { addUser } from "@/lib/user.action.js";
import { useFormState } from "react-dom";

const UserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className="flex flex-col w-4/5 gap-2">
      <select
        name="isAdmin"
        className="p-2 rounded bg-slate-200 outline-none text-black"
      >
        <option value="false">Permission</option>
        <option value="true">Admin</option>
        <option value="false">Utilisateur</option>
      </select>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        name="username"
        className="p-2 rounded bg-slate-200 outline-none text-black"
      />
      <input
        type="email"
        placeholder="Adresse mail"
        name="email"
        className="p-2 rounded bg-slate-200 outline-none text-black"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        name="password"
        className="p-2 rounded bg-slate-200 outline-none text-black"
      />
      <input
        type="file"
        name="img"
        className="p-2 rounded outline-none text-black"
      />
      <button className="p-2 bg-indigo-800 rounded font-bold">Ajouter</button>
      <p> {state?.error}</p>
    </form>
  );
};

export default UserForm;
