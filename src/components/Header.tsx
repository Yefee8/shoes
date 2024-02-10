import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="w-full px-16 border-b flex-wrap border-b-black/20 min-h-20 md:py-0 py-4 flex justify-center gap-4 md:justify-between items-center">
      <Link href="/">
        <h1 className={montserrat.className + " font-bold text-xl hover:text-primary duration-100"}>
          Shoes
        </h1>
      </Link>

      <div className="flex gap-8 flex-wrap items-center justify-center">
        <div className="gap-4 flex flex-wrap items-center justify-center">
          <Link
            href="https://github.com/Yefee8"
            className="text-sm font-medium cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-lg duration-200"
          >
            Bussines Story
          </Link>

          <Link
            href="https://twitter.com/Yefee_8"
            className="text-sm font-medium cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-lg duration-200"
          >
            New Products
          </Link>

          <Link
            href="https://www.instagram.com/yefee8"
            className="text-sm font-medium cursor-pointer hover:bg-primary hover:text-white p-1.5 rounded-lg duration-200"
          >
            Popular Products
          </Link>
        </div>

        <div className="gap-4 flex items-center">
          <FaShoppingCart className="cursor-pointer text-2xl hover:text-primary duration-100" />
          <FaCircleUser className="cursor-pointer text-2xl hover:text-primary duration-100" />
        </div>
      </div>
    </header>
  );
}
