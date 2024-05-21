import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";

const Links = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`text-sm font-medium p-2 w-[100px] rounded-lg ${
        pathname == item.path && "bg-slate-50 text-black"
      }`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default Links;
