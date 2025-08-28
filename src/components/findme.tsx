"use client";

import Social from "./socials";
import Link from "next/link";

export default function FindMe({ isButton = false }) {
  return (
    <div className="text-center w-full px-6 md:px-24 py-10 border border-gray-200 dark:border-gray-800 text-black dark:text-white rounded-lg">
      <p className="text-3xl mb-7 font-medium">Find me</p>
      <Social />
      {isButton && (
        <Link
          href="/contact"
          className="inline-block m-5 bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Send a Message
        </Link>
      )}
    </div>
  );
}
