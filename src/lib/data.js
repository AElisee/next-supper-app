import { Nosifer } from "next/font/google/index.js";
import { connectToDb } from "./dbConnexion.js";
import { Post, User } from "./models.js";

import { unstable_noStore as noStore } from "next/cache";


// ---  LES FONCTION POUR LES OBTENIR LES DONNES DANS CE FICHIER SONT A UTILISER LOSQU'ON N'UTILISE PAS D'API POUR LES DATAS
export const getPosts = async () => {
  noStore();
  try {
    connectToDb();
    const posts = Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts !");
  }
};

export const getSinglePost = async (slug) => {
  try {
    connectToDb();
    const posts = Post.findOne({ slug });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch this post !");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connectToDb();
    const users = User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch this users !");
  }
};
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch this user !");
  }
};


export const DateFormater = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(date);
  return formattedDate;
};
