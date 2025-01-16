import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-zinc-800 p-4 flex">
      <Link href="/" className="text-3xl flex items-center">
        <FaShoppingCart className="mr-4" size={40} />
        MiMandado
      </Link>
    </header>
  );
};
