import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="w-full px-16 md:flex-row flex-col border-t flex-wrap border-t-black/20 min-h-40 md:py-0 py-4 flex justify-center gap-24 md:justify-start items-center">
      <h1
        className={
          montserrat.className +
          " font-bold text-xl"
        }
      >
        Shoes
      </h1>

      <div className="flex flex-col gap-2 w-full items-center">
        <h1 className="text-lg font-medium">
            Reach Us
        </h1>
        <Link className="mt-4 text-sm hover:underline text-black" href="#">
            Link 1
        </Link>
        <Link className="text-sm hover:underline text-black" href="#">
            Link 2
        </Link>
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        <h1 className="text-lg font-medium">
            Development Story
        </h1>
        <Link className="mt-4 text-sm hover:underline text-black" href="#">
            Link 3
        </Link>
        <Link className="text-sm hover:underline text-black" href="#">
            Link 4
        </Link>
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        <h1 className="text-lg font-medium">
            Buy Shoes
        </h1>
        <Link className="mt-4 text-sm hover:underline text-black" href="#">
            Link 5
        </Link>
        <Link className="text-sm hover:underline text-black" href="#">
            Link 6
        </Link>
      </div>
    </footer>
  );
}
