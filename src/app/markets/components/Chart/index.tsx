"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./index.css";
import { useGetDailyHistorical } from "../../hooks/useGetDailyHistorical";

type IChart = {
  symbol: string;
};

const ChartComponent = ({ symbol }: IChart): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState("line");
  console.log("symbol", symbol);
  const { data, isLoading } = useGetDailyHistorical(symbol);

  const candleStickData = data?.historical
    .map((item: any) => {
      return { x: item.date, y: [item.open, item.high, item.low, item.close] };
    })
    .reverse();

  const handleTabChange = (tab: string) => {
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
      <div className="flex justify-center space-x-4 list-none rounded-xl w-auto">
        <button
          className={`focus:outline-none px-4 py-2 rounded-lg  ${
            selectedTab === "line"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTabChange("line")}
        >
          Line Chart
        </button>
        <button
          className={`focus:outline-none px-4 py-2 rounded-lg ${
            selectedTab === "area"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTabChange("area")}
        >
          Area Chart
        </button>
        <button
          className={`focus:outline-none px-4 py-2 rounded-lg ${
            selectedTab === "candlestick"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTabChange("candlestick")}
        >
          Candlestick Chart
        </button>
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
