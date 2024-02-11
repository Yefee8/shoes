import { FaShoppingCart } from "react-icons/fa";

export default function CardPart() {
  return (
    <div className="relative">
      <div className="absolute -z-10 md:-translate-x-[300px] hidden translate-y-8 md:w-[489px] w-72 lg:flex flex-col md:gap-8 gap-12 border-black/30 rounded-2xl border px-6 md:px-12 py-6">
        <div className="md:h-[180px]">
          <div className="flex group relative justify-center">
            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:translate-x-0 group-hover:rotate-0 -translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
            />

            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:rotate-0 rotate-[-30deg] duration-200"
            />

            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:translate-x-0 group-hover:rotate-0 translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">Nike Shoe</h2>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">$300.00</h1>

            <button className="hover:bg-primary border border-primary text-primary hover:text-background p-2 rounded-xl text-base font-medium duration-150 flex gap-1 items-center">
              <FaShoppingCart className="text-xl" />
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -z-10 md:translate-x-[300px] hidden translate-y-8 md:w-[489px] w-72 lg:flex flex-col md:gap-8 gap-12 border-black/30 rounded-2xl border px-6 md:px-12 py-6">
        <div className="md:h-[180px]">
          <div className="flex group relative justify-center">
            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:translate-x-0 group-hover:rotate-0 -translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
            />

            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:rotate-0 rotate-[-30deg] duration-200"
            />

            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:translate-x-0 group-hover:rotate-0 translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">Nike Shoe</h2>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">$300.00</h1>

            <button className="hover:bg-primary border border-primary text-primary hover:text-background p-2 rounded-xl text-base font-medium duration-150 flex gap-2 items-center">
              <FaShoppingCart className="text-xl" />
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-[489px] shadow-lg hover:shadow-xl hover:shadow-primary/30 shadow-primary/25 duration-150 bg-background w-72 flex flex-col md:gap-8 gap-12 border-black/30 rounded-2xl border px-6 md:px-12 py-6">
        <div className="md:h-[180px]">
          <div className="flex group relative justify-center">
            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:translate-x-0 group-hover:rotate-0 -translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
            />

            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:rotate-0 rotate-[-30deg] duration-200"
            />

            <img
              src="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              className="w-2/3 group-hover:translate-x-0 group-hover:rotate-0 translate-x-4 absolute hover:rotate-0 rotate-[-30deg] duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">Nike Shoe</h2>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">$300.00</h1>

            <button className="hover:bg-primary border border-primary text-primary hover:text-background p-2 rounded-xl text-base font-medium duration-150 flex gap-2 items-center">
              <FaShoppingCart className="text-xl" />
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
