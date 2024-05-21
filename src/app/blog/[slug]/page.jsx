import PostUser from "@/components/postUser/PostUser.jsx";
import { DateFormater, getSinglePost } from "@/lib/data.js";
import Image from "next/image.js";
import React, { Suspense } from "react";

//--- METADATA POUR LES PAGE DYNAMIQUE
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);
  return {
    title: post.title,
    description: post.body,
  };
};
//---

//--- AVEC UNE API
const getData = async (slug) => {
  const result = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!result.ok) {
    throw new Error("Erreur");
  }

  return result.json();
};

const SinglePost = async ({ params }) => {
  const { slug } = params;

  // --- AVEC UNE API
  const post = await getData(slug);

  //--- SANS API
  // const post = await getSinglePost(slug);

  return (
    <div className="flex px-20 py-5">
      {/* IMG CTN */}
      {/*Pour fixer une image dans un container: le container doit être en position relative, le composant Image doit avoir la propriété fill et dans les csss width et height à 100%*/}
      <div className="w-[25%] h-[400px] overflow-hidden relative ">
        <Image
          src="/images/luke.jpg"
          fill
          className="object-center object-cover  w-full h-full"
        />
      </div>
      <div className="w-[75%] px-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-primary text-2xl pb-4">{post.title}</h1>
          {/* DETAILS */}
          <div className="flex gap-5">
            {/* TEXTE DE DETAILS */}
            <Suspense fallback={<span>un instant...</span>}>
              <PostUser userId={post.userId} />
            </Suspense>
            <div className="flex flex-col">
              <span className="text-slate-400">
                <small>Publié le</small>
              </span>
              <span>
                <small>{DateFormater(post.createdAt)}</small>
              </span>
            </div>
          </div>
        </div>
        {/* DESC */}
        <div className="py-5 w-[60%]">{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePost;
