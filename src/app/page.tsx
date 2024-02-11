import { Montserrat } from "next/font/google";
import CardPart from "@/components/CardPart";
import Enjoy from "@/components/Enjoy";
import SeeMore from "@/components/SeeMore";
import RecommendedProducts from "@/components/RecommendedProducts";
import BeAnFranchise from "@/components/BeAnFranchise";

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

        <SeeMore />
      </div>

      <Enjoy />

      <RecommendedProducts />

      <BeAnFranchise />
    </div>
  );
}
