"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col  justify-center items-start text-center   ">
      {/* Title + Image */}
      <div className="flex justify-between items-center flex-col-reverse md:flex-row items-center md:justify-between w-full">
        <div className="mb-8 space-y-4 sm:mb-0 max-w-xl">
          <p className=" font-jost text-6xl sm:text-8xl leading-tight text-left mb-8 md:mb-0">
            Hello, I'm <br /> Roi Dahan
          </p>
          {/* Paragraph */}
          <p className=" text-lg sm:text-xl max-w-2xl mb-6 text-left">
            I'm a passionate developer specializing in building exceptional
            digital experiences. Explore my projects and get to know more about
            me.
          </p>
          <div className="flex justify-start">
            <button className=" bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition items-start">
              View My Work
            </button>
          </div>
        </div>
        <div className="w-80 md:w-[400px] rounded-4xl shadow-2xl ">
          {/* <Image
            src="/bg.png"
            alt="Mock image"
            width={400}
            height={500}
            className="rounded-4xl shadow-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
}
