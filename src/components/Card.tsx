import { FaShoppingCart } from "react-icons/fa";

interface props {
  image: string;
  title: string;
  price: string;
}

export default function Card(props: props) {
  return (
    <div className="md:min-w-[489px] min-w-[288px] hover:shadow-lg hover:shadow-primary/30 duration-150 bg-background w-72 flex flex-col md:gap-8 gap-12 border-black/30 rounded-2xl border px-6 md:px-12 py-6">
      <div className="md:h-[180px]">
        <div className="flex group relative justify-center">
          <img
            src={props.image}
            className="md:h-[150px] h-[75px] group-hover:translate-x-0 group-hover:rotate-0 -translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
          />

          <img
            src={props.image}
            className="md:h-[150px] h-[75px] group-hover:rotate-0 rotate-[-30deg] duration-200"
          />

          <img
            src={props.image}
            className="md:h-[150px] h-[75px] group-hover:translate-x-0 group-hover:rotate-0 translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-xl">{props.title}</h2>
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <h1 className="text-2xl font-bold">${props.price}</h1>

          <button className="hover:bg-primary border border-primary text-primary hover:text-background p-2 rounded-xl text-base font-medium duration-150 flex gap-2 items-center">
            <FaShoppingCart className="text-xl" />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
