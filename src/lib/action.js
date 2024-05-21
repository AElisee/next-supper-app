"use server";

import { signIn, signOut } from "./auth.js";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
