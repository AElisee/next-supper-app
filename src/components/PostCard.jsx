import { DateFormater } from "@/lib/data.js";
import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="min-w-[320px] w-[320px] h-[420px] p-2 flex flex-col mb-3 mr-3 border rounded-lg">
      <div className="top flex h-[55%]">
        <div className="w-[82%] h-full overflow-hidden bg-slate-300  relative">
          <Image
            src="/images/luke.jpg"
            fill
            className="object-center object-cover w-full h-full"
          />
        </div>
        <div className="w-[18%] flex items-center justify-center">
          <p className="transform  -rotate-90 text-orange-400 whitespace-nowrap">
            <small className="">{DateFormater(post.createdAt)}</small>
          </p>
        </div>
      </div>
      <div className="h-[45%] flex flex-col gap-1 pt-3 justify-between">
        <h2 className="text-base font-bold">{post.title}</h2>
        <p className="text-justify">
          <small>{post?.body.substring(0, 140)}...</small>
        </p>
        <Link href={`/blog/${post.slug}`} className="uppercase underline">
          <small>Voir plus</small>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
