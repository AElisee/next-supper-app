"use server";

import { signIn, signOut } from "./auth.js";
import { connectToDb } from "./dbConnexion.js";
import { User } from "./models.js";
import bcrypt from "bcrypt";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, cpassword, img } =
    Object.fromEntries(formData);

  if (password !== cpassword) {
    return "Les mots de passe ne correspondent pas !";
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return "Ce nom d'utilisateur existe déjà !";
    }
    // bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    //---

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("nouvel utilisateur ajouté");
  } catch (error) {
    console.log(error);
    return { error: "L'inscription n'a pas réussi !" };
  }
};

export const login = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);
    return { error: "L'inscription n'a pas réussi !" };
  }
};
