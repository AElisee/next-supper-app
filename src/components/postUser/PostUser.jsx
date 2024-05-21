import { getUser } from "@/lib/data.js";
import Image from "next/image.js";

//--- AVEC UNE API
// const getUser = async (id) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   if (!result.ok) {
//     throw new Error("Erreur");
//   }

//   return result.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  //--- AVEC UNE API EXTERNE
  //   const user = await getUser(userId);

  return (
    <>
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
        <Image
          src={user.img ? user.img : "/icons/user.webp"}
          fill
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-slate-400">
          <small>Auteur</small>
        </span>
        <span>
          <small>{user.username}</small>
        </span>
      </div>
    </>
  );
};

export default PostUser;
