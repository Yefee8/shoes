import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BeAnFranchise() {
  return (
    <div className="flex relative lg:flex-row flex-col mt-16 rounded-2xl gap-0 items-center lg:items-start">
      <img
        src="https://media.blogto.com/articles/20180423-MECQueen4.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
        className="lg:w-1/2 shadow-lg min-w-[288px] w-full lg:rounded-r-none rounded-2xl rounded-l-2xl"
      />
      <div
        className="lg:w-1/2 min-w-[288px] justify-between lg:absolute lg:right-0 h-full w-full bg-white/40 shadow-lg mt-4 lg:mt-0 rounded-r-2xl 
      rounded-2xl lg:rounded-l-none flex flex-col gap-4 px-6 p-6 lg:px-8"
      >
        <div className="flex flex-col gap-4">
          <h1
            className={
              montserrat.className +
              "w-full flex-wrap text-3xl flex gap-2 relative font-bold lg:text-left text-center"
            }
          >
            Become a<span className="glitch-v4">franchise</span>
          </h1>

          <p className="text-base font-medium">
            Become a shoes franchise and earn together!
          </p>
        </div>

        <div className="w-full flex flex-col lg:gap-8 gap-6">
          <input
            type="name"
            placeholder="name"
            className="outline-primary bg-background duration-100 placeholder:text-black text-black py-2 lg:w-1/2 max-w-[346px] w-full rounded-lg border px-4 text-lg 
            font-medium border-primary"
          />

          <input
            type="address"
            placeholder="address"
            className="outline-primary bg-background duration-100 placeholder:text-black text-black py-2 lg:w-1/2 max-w-[346px] w-full rounded-lg border px-4 text-lg 
            font-medium border-primary"
          />

          <input
            type="email"
            placeholder="email"
            className="outline-primary bg-background duration-100 placeholder:text-black text-black py-2 lg:w-1/2 max-w-[346px] w-full rounded-lg border px-4 text-lg 
            font-medium border-primary"
          />
        </div>
        <button className="px-4 py-2 font-bold text-base rounded-lg bg-primary text-white w-full lg:w-1/2 max-w-[346px]">
          send it
        </button>
      </div>
    </div>
  );
}
