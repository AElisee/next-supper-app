"use server";
import { revalidatePath } from "next/cache.js";
import { Post, User } from "./models.js";
import { connectToDb } from "./dbConnexion.js";
import bcrypt from "bcrypt";

export const addUser = async (prevState, formData) => {
  const { username, email, password, isAdmin, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Cet utilisateur existe déjà !" };
    }
    // bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    //---

    const newUser = new User({
      isAdmin,
      username,
      email,
      password: hashedPassword,
      // img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
