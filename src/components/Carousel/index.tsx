"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Separator } from "@/components/ui/separator";
import moment from "moment";
import Link from "next/link";

export interface ImageItem {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
}

interface CarouselProps {
  images: ImageItem[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div
        id="indicators-carousel"
        className="relative w-full mb-4"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((imageUrl: ImageItem, index) => (
            <div
              key={imageUrl.id}
              className={`${
                currentIndex === index ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item="active"
            >
              <img
                src={imageUrl.url}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={imageUrl.title}
              />
              <div className="absolute w-10/12 font-bold top-20 left-20 inset-x-auto text-white">
                <Link
                  href={`/blog/${imageUrl.title}`}
                  className="text-xl md:text-4xl"
                >
                  {imageUrl.title}
                </Link>
                <Separator className="my-4 bg-slate-50" />
                <p className="text-slate-50 font-md">
                  {moment(imageUrl.date).format("LL")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-amber-400" : "bg-gray-300"
              }`}
              aria-current={currentIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
