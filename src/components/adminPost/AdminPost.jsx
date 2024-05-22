import { getPosts } from "@/lib/data.js";
import { deletePost } from "@/lib/post.action.js";
import Image from "next/image.js";
import React from "react";

const AdminPost = async () => {
  const posts = await getPosts();
  return (
    <>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <div key={post.id} className="flex justify-between py-2">
            <div className=" flex gap-4  items-center">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                <Image
                  src={post.img ? post.img : "/images/luke.jpg"}
                  fill
                  className="object-center object-cover w-full h-full"
                />
              </div>
              <p>{post.title}</p>
            </div>
            <div className="flex items-center pr-8">
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className="bg-slate-500 p-1 rounded-md cursor-pointer">
                  <small>Supprimer</small>
                </button>
              </form>
            </div>
          </div>
        ))
      ) : (
        <div className="h-1/2 flex justify-center items-center">Aucun post</div>
      )}
    </>
  );
};

export default AdminPost;
