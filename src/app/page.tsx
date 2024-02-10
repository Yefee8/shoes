import { Montserrat } from "next/font/google";
import CardPart from "@/components/CardPart";
import { FaArrowCircleDown } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center">
      <h1 className={montserrat.className + " text-5xl font-bold text-left"}>
        <span className="glitch ">shoes</span> <br /> to reflect your style
      </h1>

      <CardPart />

      <div className="absolute top-[90vh] lg:flex hidden gap-2 items-center font-bold text-xl">
        See More <FaArrowCircleDown className="text-2xl" />
      </div>
    </div>
  );
}
