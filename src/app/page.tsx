import { Montserrat } from "next/font/google";
import CardPart from "@/components/CardPart";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "@/components/Card";
import Enjoy from "@/components/Enjoy";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center">
      <div className="w-full md:h-[calc(100vh-224px)] flex flex-col gap-24 md:justify-start justify-center items-center">
        <h1
          className={
            montserrat.className +
            " text-5xl font-bold md:text-left text-center"
          }
        >
          <span className="glitch ">shoes</span> <br /> to reflect your style
        </h1>

        <CardPart />

        <div className="absolute top-[90vh] md:flex hidden gap-2 items-center font-bold text-xl">
          See More <FaArrowCircleDown className="text-2xl" />
        </div>
      </div>

      <Enjoy />
    </div>
  );
}
