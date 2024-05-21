import Link from "next/link.js";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-black">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-5xl  font-extrabold text-white">
          Page introuvable
        </h2>
        <p className="text-lg text-white">
          Il semblerait que la page que vous recherchez n’existe plus.
        </p>
        <Link
          href={"/"}
          className="w-[150px] py-2 px-1 bg-white ttex-black text-base rounded-md flex justify-center"
        >
          Retour à Elisha
        </Link>
        <p className="text-white">
          <small>404</small>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
