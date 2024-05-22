import AdminPost from "@/components/adminPost/AdminPost.jsx";
import PostForm from "@/components/adminPost/PostForm.jsx";
import AdminUser from "@/components/adminUser/AdminUser.jsx";
import UserForm from "@/components/adminUser/UserForm.jsx";
import { auth } from "@/lib/auth.js";
import React from "react";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="">
      {/* POST */}
      <div className="flex justify-center text-white bg-primary px-10 ">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Posts</h1>
          <AdminPost />
        </div>
        {/* Post form */}
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold pb-3">Ajouter un post</h1>
          <PostForm userId={session.user.id} />
        </div>
      </div>
      {/* USER */}
      <div className="flex justify-center text-white bg-primary px-10 pt-2">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Utilisateurs</h1>
          <AdminUser />
        </div>
        {/* Post form */}
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold pb-3">Ajouter un post</h1>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
