"use server";

import { revalidatePath } from "next/cache.js";
import { connectToDb } from "./dbConnexion.js";
import { Post } from "./models.js";

// ADD POST
export const addPost = async (prevState, formData) => {
  let { title, body, slug, userId } = Object.fromEntries(formData);

  const cleanSlug = (text) => {
    return text
      .replace(/\s+/g, "-") // Remplace les espaces par des tirets
      .replace(/[^\w\-]+/g, ""); // Supprime les caractères non alphanumériques (en gardant les tirets)
  };
  slug = slug ? cleanSlug(slug) : cleanSlug(title);

  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    if (post) {
      return { error: "Ce slug existe déjà !" };
    }

    const newPost = new Post({
      title,
      body,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Oups! quelque chose a mal tourné!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Oups quelque chose a mal tourné !" };
  }
};
