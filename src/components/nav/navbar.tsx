'use client';

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "../assets";
import ModelToggle from "./model-toggle";

export default function Navbar() {
  const [showFullNav, setShowFullNav] = useState<boolean>(true);
  return (
    <nav
      className={`
      bg-zinc-100 border-b sm:border-b-0 sm:border-r border-zinc-300
        p-3 flex flex-col w-full
        ${showFullNav ? 'sm:w-72 h-fit sm:h-full space-y-5' : 'sm:w-16'}
        transition-all duration-100 ease-in-out
      `}
    >
      {/* Nav header */}
      <div className="flex justify-between">
        {/* The main action button or link for the nav */}
        <Link
          href="/chat"
          className={`
            border-zinc-950 bg-zinc-800 text-zinc-300
            p-2 rounded border w-fit sm:w-full text-center shadow
            ${showFullNav ? '' : 'sm:opacity-0 sm:invisible'}
            transition-all duration-75 ease-in-out
          `}
        >
          ＋ New Chat
        </Link>
        {/* Toggle for showing and hiding Nav when screen is small  */}
        <button
          className="px-2 sm:hidden text-zinc-800"
          onClick={() => setShowFullNav(!showFullNav)}
        >
          {showFullNav ? <XIcon strokeWidth={2} /> : <MenuIcon strokeWidth={2} />}
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
          <Link className="hover:underline underline-offset-2" href="/">What is Redis?</Link>
          <Link className="hover:underline underline-offset-2" href="/">EDI 204</Link>
          <Link className="hover:underline underline-offset-2" href="/">React UseEffect</Link>
          <Link className="hover:underline underline-offset-2" href="/">Banana Bread Recipe</Link>
          <Link className="hover:underline underline-offset-2" href="/">Rate Limiting</Link>
        </ul>

        {/* Nav footer. Items in this div are forced down to the bottom of the screen when screen is big */}
        <div className="flex flex-col space-y-2">
          <Link className="hover:underline underline-offset-2" href="/">Profile</Link>
          <Link className="hover:underline underline-offset-2" href="/">Log out</Link>
        </div>

        <ModelToggle />
      </div>

      {/* Toggle for showing and hiding Nav when screen is big and navbar shows as a sidebar */}
      <button
        className="p-2 rounded border hidden sm:block border-zinc-700 bg-zinc-800 text-zinc-300"
        onClick={() => setShowFullNav(!showFullNav)}
      >
        {/* Can use icons or arrows or whatever here */}
        {showFullNav ? '<' : '>'}
      </button>
    </nav>
  );
}