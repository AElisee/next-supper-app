"use client";

import { addPost } from "@/lib/post.action.js";
import { useFormState } from "react-dom";

const PostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex flex-col w-4/5 gap-2">
      <input type="hidden" name="userId" value={userId} />
      <input
        type="text"
        placeholder="Titre"
        name="title"
        className="p-2 rounded bg-slate-200 outline-none text-black"
      />
      <input
        type="text"
        placeholder="Slug"
        name="Slug"
        className="p-2 rounded bg-slate-200 outline-none text-black"
      />
      <input
        type="file"
        placeholder="Image"
        name="img"
        className="p-2 rounded  outline-none"
      />
      <textarea
        name="body"
        placeholder="Description"
        rows={7}
        className="p-2 rounded bg-slate-200 outline-none text-black"
      ></textarea>
      <button className="p-2 bg-indigo-800 rounded font-bold">Ajouter</button>
      <p> {state?.error}</p>
    </form>
  );
};

export default PostForm;
