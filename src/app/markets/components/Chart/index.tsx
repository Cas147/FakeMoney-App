"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./index.css";
import { useGetDailyHistorical } from "../../hooks/useGetDailyHistorical";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaChartLine } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";

type IChart = {
  symbol: string;
  name: string;
};

const ChartComponent = ({ symbol, name }: IChart): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<
    "line" | "area" | "candlestick"
  >("line");
  console.log("symbol", symbol);
  const { data, isLoading } = useGetDailyHistorical(symbol);

  const candleStickData = data?.historical
    .map((item: any) => {
      return { x: item.date, y: [item.open, item.high, item.low, item.close] };
    })
    .reverse();

  const handleTabChange = (tab: "line" | "area" | "candlestick") => {
    setSelectedTab(tab);
  };

  const options = {
    chart: {
      id: `${selectedTab}-chart`,
      toolbar: {
        show: true,
      },
      zoom: {
        autoScaleYaxis: true,
      },
    },
    xaxis: {
      categories:
        selectedTab === "candlestick"
          ? null
          : data?.historical
              .map((item: any) => {
                return item.date;
              })
              .reverse(),
      range: selectedTab === "candlestick" ? 40 : 30,
    },
    yaxis: { forceNiceScale: true },
    colors: ["#fcbf24"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.6,
        stops: [0, 50, 100],
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: data?.historical
        .map((item: any) => {
          return item.close;
        })
        .reverse(),
    },
  ];

  const candlestickSeries = [
    {
      name: "Series 3",
      data: candleStickData,
    },
  ];

  return (
    <div className="px-0 md:px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl text-white">{name}</div>
        <div className="block md:flex justify-between items-center">
          <Tabs defaultValue={selectedTab}>
            <TabsList className="grid grid-cols-3 bg-slate-600">
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="line"
                onClick={() => handleTabChange("line")}
              >
                <FaChartLine />
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="area"
                onClick={() => handleTabChange("area")}
              >
                <FaChartArea />
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="candlestick"
                onClick={() => handleTabChange("candlestick")}
              >
                <FaChartSimple />
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="1d" className="ml-4">
            <TabsList className="grid grid-cols-4 bg-slate-600">
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="1d"
              >
                1d
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="1h"
              >
                1h
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="5m"
              >
                5m
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-amber-400"
                value="1m"
              >
                1m
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {selectedTab === "candlestick" ? (
        <Chart
          options={options}
          series={candlestickSeries}
          type={"candlestick"}
          height={500}
        />
      ) : (
        <Chart
          options={options}
          series={series}
          type={selectedTab}
          height={500}
        />
      )}
    </div>
  );
};

export default ChartComponent;
