import { Montserrat } from "next/font/google";
import Card from "./Card";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function RecommendedProducts() {
  const recommendations = [
    {
      title: "Adidas Shoe",
      price: "250.00",
      image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Image.png",
    },
    {
      title: "Nike Shoe",
      price: "350.00",
      image: "https://www.pngmart.com/files/6/Shoe-PNG-Free-Download.png",
    },
    {
      title: "Nike Shoe",
      price: "300.00",
      image:
        "https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png",
    }
  ];

  return (
    <div className="w-full flex items-center flex-col gap-8 justify-center mt-16">
      <h1
        className={
          montserrat.className +
          " text-3xl flex gap-2 relative font-bold md:text-left text-center"
        }
      >
        our
        <span className="glitch-v3">recommendations</span>
      </h1>

      <div className="w-full flex flex-wrap justify-center md:justify-between gap-8">
        {recommendations.map((recommends) => {
          return (
              <Card {...recommends} />
          );
        })}
      </div>
    </div>
  );
}
