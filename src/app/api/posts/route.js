import { connectToDb } from "@/lib/dbConnexion.js";
import { Post } from "@/lib/models.js";

import { NextResponse } from "next/server.js";

export const GET = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts !");
  }
};
