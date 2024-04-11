import { dataMenu } from "@/data/dataMenu";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["500", "700"] });

export default function Nav() {
  return (
    <nav>
      <ul className={`text-white font-medium flex gap-x-4 ${openSans.className}`}>
        {dataMenu.map((menu) => (
          <li key={menu.id} className="border-b-2 border-transparent hover:border-lime-400 duration-500">
            <a href={menu.ancor} className="hover:text-lime-200 duration-500">
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}