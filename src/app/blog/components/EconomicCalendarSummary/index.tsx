"use client";
import EconomicCalendarSkeleton from "@/app/news/components/Skeleton/EconomicCalendarSkeleton";
import getThreeDays from "@/app/news/helpers/getThreeDays";
import { useNews } from "@/app/news/hooks/useNews";
import { Card } from "@/components/ui/card";
import Events from "../Events";
import { getNextEvents } from "../../helpers/getNextEvents";
import Link from "next/link";
import { EventData } from "@/app/news/interfaces/news";

const EconomicCalendarSummary = (): JSX.Element => {
  /*   const { data, isLoading } = useNews(getThreeDays()[0], getThreeDays()[2]); */
  const mock: EventData[] = [
    {
      date: "2024-04-12 12:00",
      country: "US",
      event: "Baker Hughes Total Rigs Count (Apr/12)",
      currency: "USD",
      previous: 620,
      estimate: null,
      actual: 617,
      change: -3,
      impact: "Low",
      changePercentage: -0.484,
    },
    {
      date: "2024-04-12 12:00",
      country: "US",
      event: "Baker Hughes Oil Rig Count (Apr/12)",
      currency: "USD",
      previous: 508,
      estimate: null,
      actual: 506,
      change: -2,
      impact: "Low",
      changePercentage: -0.394,
    },
    {
      date: "2024-04-12 13:30",
      country: "US",
      event: "Fed Bostic Speech",
      currency: "USD",
      previous: null,
      estimate: null,
      actual: null,
      change: 0,
      impact: "Medium",
      changePercentage: 0,
    },
  ];

  return (
    <Card className="w-full rounded-xl p-4  mt-8">
      <p className="text-amber-400 font-bold">Calendario Económico</p>
      {false ? <EconomicCalendarSkeleton /> : <Events events={mock} />}
      <div className="w-full flex justify-center">
        <Link
          href={`/`}
          className="p-2 text-sm font-medium text-center items-center border border-amber-400 justify-center mb-2 me-2 rounded-xl group bg-gradient-to-br hover:from-amber-300 hover:to-orange-600 w-full text-white"
        >
          Ver calendario económico
        </Link>
      </div>
    </Card>
  );
};
export default EconomicCalendarSummary;
