"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

import { NewsItem } from "@/interfaces/news";
import News from "./news/components/News/News";

import { useNews } from "./news/hooks/useNews";
import newsAdapter from "./news/helpers/newsAdapter";
import NewsSkeleton from "./news/components/Skeleton/NewsSkeleton";

import { TransformedFeedItem } from "./news/interfaces/feed";

import Title from "@/components/Title/Title";
import Tabs from "@/components/Tabs/Tabs";
import TableDemo from "./news/components/EconomicsCalendarTable";
import { newMocks } from "./news/__Mock__/newsMock";
import getSevenDays from "./news/helpers/getSevenDays";
import { economicCalendarNews } from "./news/__Mock__/economicCalendar";
import TableSkeleton from "./news/components/Skeleton/TableSkeleton";

const Page = (): JSX.Element => {
  const { data, isLoading } = useNews(getSevenDays()[0], getSevenDays()[6]);

  const tabs: Tab[] = [
    {
      id: "tab1",
      title: "Forex",
      content: <div>Content for Tab 1</div>,
    },
    {
      id: "tab2",
      title: "Cryptos",
      content: <div>Content for Tab 2</div>,
    },
  ];

  return (
    <div className="px-0 md:px-8 py-2">
      <Title text="Noticias" />
      <div className="w-full grid grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          {isLoading ? <TableSkeleton /> : <TableDemo data={data?.data} />}
          
        </div>
        <div className="col-span-12 md:col-span-4 px-4">
          <div className="px-0 md:px-2">
            <Tabs tabs={tabs} />
            {false ? <NewsSkeleton /> : <News news={newMocks} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
