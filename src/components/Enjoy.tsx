"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "./Card";
import { Montserrat } from "next/font/google";
import { useRef, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Enjoy() {
  const scrollRef: any = useRef(null);
  const [scrollCount, setScrollCount] = useState(0);

  const carousel = [
    {
      title:"",
      price: ""
    }
  ]

  return (
    <div id="enjoy" className="w-full flex items-center flex-col gap-8 justify-center mt-16">
      <h1
        className={
          montserrat.className +
          " text-3xl flex gap-2 relative font-bold md:text-left text-center"
        }
      >
        enjoy the
        <span className="glitch-v2">bests</span>
      </h1>

      <div className="max-w-full md:px-16 px-12 relative flex items-center md:justify-start justify-center">
        <button
          onClick={() => {
            if (scrollCount - 30 > 0) {
              const isThisDesktop: boolean = window.innerWidth > 768;
              const scrollSize = isThisDesktop ? 504 : 304;
              scrollRef?.current.scrollTo({
                left: scrollCount - scrollSize,
                behavior: "smooth",
              });

              setTimeout(() => {
                setScrollCount(scrollRef.current.scrollLeft);
              }, 300);
            }
          }}
          className="absolute duration-100 text-background flex justify-center items-center left-0 w-10 h-10 rounded-xl cursor-pointer
           bg-primary disabled:opacity-50 disabled:bg-gray-500"
          disabled={scrollCount - 30 < 0 ? true : false}
        >
          <IoIosArrowBack className="text-xl" />
        </button>

        <button
          onClick={() => {
            if (
              scrollCount + scrollRef.current.clientWidth + 30 <
              scrollRef.current.scrollWidth
            ) {
              const isThisDesktop: boolean = window.innerWidth > 768;
              const scrollSize = isThisDesktop ? 504 : 304;
              scrollRef?.current.scrollTo({
                left: scrollCount + scrollSize,
                behavior: "smooth",
              });

              setTimeout(() => {
                setScrollCount(scrollRef.current.scrollLeft);
              }, 300);
            }
          }}
          disabled={
            scrollRef.current
              ? scrollCount + scrollRef.current.clientWidth + 30 >=
                scrollRef.current.scrollWidth
              : false
          }
          className="absolute duration-100 right-0 text-background flex justify-center items-center w-10 h-10 rounded-xl cursor-pointer
           bg-primary disabled:opacity-50 disabled:bg-gray-500"
        >
          <IoIosArrowForward className="text-xl" />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth no-scrollbar min-w-[300px] max-w-[calc(100%-48px)]  md:max-w-[calc(100%-64px]"
        >
            <div className="min-w-screen pb-4 flex gap-4">
              <Card
                title="Nike Shoe"
                price="300.00"
                image="https://freepngimg.com/thumb/shoes/26263-3-nike-shoes-transparent-image.png"
              />

              <Card
                title="Adidas Shoe"
                price="275.00"
                image="https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Picture.png"
              />

              <Card
                title="Adidas Shoe"
                price="275.00"
                image="https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Image.png"
              />

              <Card
                title="Nike Shoe"
                price="275.00"
                image="https://www.pngmart.com/files/6/Shoe-PNG-Free-Download.png"
              />

              <Card
                title="Adidas Shoe"
                price="275.00"
                image="https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Picture.png"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
