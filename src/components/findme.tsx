"use client";

import { navigation } from "@/lib/findme";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function FindMe() {
  return (
    <div className="text-center w-full px-6 md:px-24 py-10 border border-gray-200 dark:border-gray-800 text-black dark:text-white rounded-lg">
      <p className="text-3xl mb-7 font-medium">Contact me</p>

      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {navigation.map((item, index) => (
          <a
            key={index}
            href={`http://${item.name}.com/${item.username}`}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <item.icon aria-hidden="true" className="h-5 w-5" />
            {/*<span className="text-sm">{item.name}</span>*/}
          </a>
        ))}

        <a
          href="mailto:jcmvishael@gmail.com"
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Mail className="h-5 w-5" />
          {/*<span className="text-sm">Email</span>*/}
        </a>
      </div>

      <Link
        href="/contact"
        className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
      >
        Send a Message
      </Link>
    </div>
  );
}
