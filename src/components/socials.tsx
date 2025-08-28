import { navigation } from "@/lib/findme";
import EMail from "./mail";

export default function Social() {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-6">
      {/*space-x-6 md:order-2*/}
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
      <EMail />
    </div>
  );
}
