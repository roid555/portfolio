"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center gap-8 sm:gap-16 px-4 sm:px-8 lg:px-16 py-8  ">
      {/* Title + Image */}
      <div className="flex border-solid border-red  gap-8 mb-8 sm:mb-16 flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-8 sm:space-y-0 ">
        <div className="mb-8 space-y-4 sm:mb-0">
          <p className="font-jost text-6xl sm:text-8xl leading-tight text-left">
            Roi <br /> Dahan
          </p>
          {/* Paragraph */}
          <p className=" text-lg sm:text-xl max-w-2xl mb-6 text-left">
            I'm a passionate developer specializing in building exceptional
            digital experiences. Explore my projects and get to know more about
            me.
          </p>
        </div>

        {/* <Image
          src="/mock-image.jpg"
          alt="Mock image"
          width={800}
          height={500}
          className="rounded-full shadow-md"
        /> */}
      </div>
    </section>
  );
}
