"use client";
import Title from "@/components/Title/Title";
import MostActives from "../components/MostActives";
import EconomicCalendarSummary from "../components/EconomicCalendarSummary";
import { activesMock5 } from "@/app/markets/__Mocks__/ActiveMock";
import { tradingBlogPost } from "../__Mock__";
import BlogHeader from "../components/BlogHeader";
import {
  adaptBlogPostHeader,
  adaptToTableOfContents,
} from "../helpers/adapters";
import TableOfContents from "../components/TableOfContents";
import SectionComponent from "../components/BlogSections";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Page({ params }: { params: { blog: string } }) {
  return (
    <>
      <ScrollIndicator />
      <div className="px-0 py-2 w-full flex justify-center">
        <div className=" md:w-10/12">
          <div className="flex w-full justify-center">
            <div className="">
              <BlogHeader content={adaptBlogPostHeader(tradingBlogPost)} />
              <img
                src={tradingBlogPost.mainImage}
                className="h-40 md:h-64	lg:h-80 mt-4 w-full"
                alt={tradingBlogPost.title}
              />
              <div className="col-span-12 md:col-span-8 mt-12">
                <div className="w-full grid grid-cols-12">
                  <div className="col-span-12 md:col-span-8">
                    <TableOfContents
                      items={adaptToTableOfContents(tradingBlogPost)}
                    />

                    <div className="mt-4">
                      {tradingBlogPost.sections.map((section) => {
                        return <SectionComponent section={section} />;
                      })}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 pl-0 md:pl-2 lg:pl-8">
                    <MostActives data={activesMock5} />
                    <EconomicCalendarSummary />
                  </div>
                </div>
              </div>

              <div className="col-span-4 md:col-span-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
