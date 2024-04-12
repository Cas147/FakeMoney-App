"use client";
import Title from "@/components/Title/Title";
import MostActives from "../components/MostActives";
import EconomicCalendarSummary from "../components/EconomicCalendarSummary";
import { activesMock5 } from "@/app/markets/__Mocks__/ActiveMock";
import { tradingBlogPost } from "../__Mock__";

export default function Page({ params }: { params: { blog: string } }) {
  return (
    <div className="px-0 py-2 w-full flex justify-center">
      <div className="w-full md:w-10/12">
        <p className="text-xl md:text-4xl text-white font-bold">
          {tradingBlogPost.title}
        </p>
        <img
          src={tradingBlogPost.mainImage}
          className="h-40 md:h-64	lg:h-80 w-full"
          alt={tradingBlogPost.title}
        />
        <p className="text-white">{params.blog}</p>
        <div className="col-span-12 md:col-span-8 mt-12">
          <div className="w-full grid grid-cols-12">
            <div className="col-span-12 md:col-span-8">
              <p className="text-white">hola</p>
            </div>
            <div className="col-span-12 md:col-span-4 pl-8">
              <MostActives data={activesMock5} />
              <EconomicCalendarSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
