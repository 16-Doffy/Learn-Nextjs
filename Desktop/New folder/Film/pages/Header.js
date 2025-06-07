import React from "react";
import Link from "next/link"; // Thay thế ở đây


export default function Header() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-2xl  my-10 mb-5">
        <Link href="/MoviesPage" passHref className="text-pink-500">
          Movie
        </Link>
        <Link href="/SelectMovie" passHref className="text-pink-500">
          Select-Movie
        </Link>
      </header>
    </>
  );
}
