"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";
import Links from "./Links.jsx";
import { handleLogout } from "@/lib/action.js";

const Navlinks = ({ session }) => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  // const isAdmin = true;

  return (
    <ul className="flex gap-2 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Links item={link} />
        </li>
      ))}
      {session?.user ? (
        <>
          {session?.user.isAdmin && (
            <li>
              <Links item={{ path: "/admin", title: "Admin" }} />
            </li>
          )}
          <form action={handleLogout}>
            <button className="flex items-center justify-center text-sm font-medium p-2 w-[90px] rounded-lg bg-white text-black">
              Logout
            </button>
          </form>
        </>
      ) : (
        <li>
          <Links item={{ path: "/login", title: "Login" }} />
        </li>
      )}
    </ul>
  );
};

export default Navlinks;
