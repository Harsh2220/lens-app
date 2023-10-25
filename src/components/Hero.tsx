"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="overflow-hidden min-h-[calc(100vh-70px)]">
      <div className="relative min-h-[calc(100vh-70px)] flex items-center">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="relative text-center md:max-w-4xl mx-auto">
            <img
              className="absolute top-44 -left-36"
              src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/images/headers/star2.svg"
              alt=""
            />
            <img
              className="absolute top-10 -right-36"
              src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/images/headers/star2.svg"
              alt=""
            />
            <h1 className="mb-10 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">
              Making credit history with nightcard
            </h1>
            <button
              className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
              onClick={() => {
                router.push("/search");
              }}
            >
              Explore Now
            </button>
          </div>
          <div className="relative max-w-max mx-auto">
            <img src="nightsable-assets/images/headers/card-half.png" alt="" />
            <img
              className="absolute top-7 -right-64"
              src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/images/headers/star.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-48"
        src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/images/headers/layer-blur.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0"
        src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/images/headers/lines2.svg"
        alt=""
      />
    </section>
  );
}
