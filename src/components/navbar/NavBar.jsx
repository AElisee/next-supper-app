import React from "react";
import Navlinks from "./Navlinks.jsx";
import { auth } from "@/lib/auth.js";

const navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="h-[85px] flex justify-between bg-primary text-white px-10">
      <div className="flex  items-center  font-bold">LOGO</div>
      <div className="flex items-center">
        <Navlinks session={session} />
      </div>
    </div>
  );
};

export default navbar;
