"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center ">
      {/* Title + Image */}
      <div className="flex items-center mb-8">
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to My Portfolio
          </h1>
          {/* Paragraph */}
          <p className="text-lg sm:text-xl max-w-2xl mb-6">
            I'm a passionate developer specializing in building exceptional
            digital experiences. Explore my projects and get to know more about
            me.
          </p>
        </div>

        <Image
          src="/mock-image.jpg"
          alt="Mock image"
          width={800}
          height={500}
          className="rounded-full shadow-md"
        />
      </div>
    </section>
  );
}
