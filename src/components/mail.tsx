import { Mail } from "lucide-react";

export default function EMail() {
  return (
    <a
      href="mailto:jcmvishael@gmail.com"
      className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      <Mail className="h-5 w-5" />
      {/*<span className="text-sm">Email</span>*/}
    </a>
  );
}
