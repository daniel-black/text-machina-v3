'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showFullNav, setShowFullNav] = useState<boolean>(true);
  return (
    <nav
      className={`
      bg-stone-900
        p-5 flex flex-col w-full
        ${showFullNav ? 'sm:w-64 h-fit sm:h-full space-y-5' : 'sm:w-16'}
        transition-all duration-100 ease-in-out
      `}
    >
      {/* Nav header */}
      <div className="flex justify-between">
        {/* The main action button or link for the nav */}
        <button
          className={`
            border-stone-700 bg-stone-800 text-stone-300
            p-2 rounded border w-fit sm:w-full 
            ${showFullNav ? '' : 'sm:opacity-0 sm:invisible'}
            transition-all duration-75 ease-in-out
          `}
        >
          Action Button
        </button>
        {/* Toggle for showing and hiding Nav when screen is small  */}
        <button
          className="p-2 rounded border sm:hidden border-stone-700 bg-stone-800 text-stone-300 px-3"
          onClick={() => setShowFullNav(!showFullNav)}
        >
          {showFullNav ? 'X' : 'Menu'}
        </button>
      </div>

      {/* Nav body */}
      <div
        className={`
          ${showFullNav ? 'flex flex-col space-y-5 ' : 'h-0 opacity-0 invisible'}
          grow transition-all duration-75 ease-in-out
        `}
      >
        {/* The main links go here. This grows to take up space. */}
        <ul className="grow flex flex-col space-y-2">
          <Link className="hover:underline underline-offset-2" href="/">Dashboard</Link>
          <Link className="hover:underline underline-offset-2" href="/">Teams</Link>
          <Link className="hover:underline underline-offset-2" href="/">Projects</Link>
          <Link className="hover:underline underline-offset-2" href="/">Analytics</Link>
          <Link className="hover:underline underline-offset-2" href="/">Reporting</Link>
        </ul>

        {/* Nav footer. Items in this div are forced down to the bottom of the screen when screen is big */}
        <div className="flex flex-col space-y-2">
          <Link className="hover:underline underline-offset-2" href="/">Profile</Link>
          <Link className="hover:underline underline-offset-2" href="/">Log out</Link>
        </div>
      </div>

      {/* Toggle for showing and hiding Nav when screen is big and navbar shows as a sidebar */}
      <button
        className="p-2 rounded border hidden sm:block border-stone-700 bg-stone-800 text-stone-300"
        onClick={() => setShowFullNav(!showFullNav)}
      >
        {/* Can use icons or arrows or whatever here */}
        {showFullNav ? '<' : '>'}
      </button>
    </nav>
  );
}