import { getUsers } from "@/lib/data.js";
import { deleteUser } from "@/lib/user.action.js";
import Image from "next/image.js";
import React from "react";

const AdminUser = async () => {
  const users = await getUsers();

  return (
    <>
      {users.length !== 0 ? (
        users.map((user) => (
          <div key={user.id} className="flex justify-between py-2">
            <div className=" flex gap-4  items-center">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                <Image
                  src={user.img ? user.img : "/images/luke.jpg"}
                  fill
                  className="object-center object-cover w-full h-full"
                />
              </div>
              <p>{user.username}</p>
            </div>
            <div className="flex items-center pr-8">
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button className="bg-slate-500 p-1 rounded-md cursor-pointer">
                  <small>Supprimer</small>
                </button>
              </form>
            </div>
          </div>
        ))
      ) : (
        <div className="h-1/2 flex justify-center items-center">
          Aucun Utilisateur
        </div>
      )}
    </>
  );
};

export default AdminUser;
