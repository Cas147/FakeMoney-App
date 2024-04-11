"use client";
import { FaAngleDown, FaAngleUp, FaRegStar } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

import Title from "@/components/Title/Title";
import { Button } from "@/components/ui/button";
import ChartComponent from "../components/Chart";
import { useGetQuote } from "../hooks/useGetuote";

export default function Page({ params }: { params: { currency: string } }) {
  const { data } = useGetQuote(params.currency);
  const formatted = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <>
      <Title text="Mercados" />
      <div className="text-white grid grid-cols-12 py-8 px-2">
        <div className="col-span-12 md:col-span-4">
          <p className="font-bold text-xl">{params.currency}</p>
          <div className="flex items-center my-2">
            <p className="text-extrabold  text-amber-400 text-2xl">
              {formatted((data || [])[0]?.price)}
            </p>
            <div className="flex items-center ml-4">
              <div
                className={`${
                  (data || [])[0]?.changesPercentage > 0
                    ? "text-green-400"
                    : "text-red-600"
                }`}
              >
                {(data || [])[0]?.changesPercentage > 0 ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </div>
              <p
                className={`font-bold ml-2 text-amber-400 ${
                  (data || [])[0]?.changesPercentage > 0
                    ? "text-green-400"
                    : "text-red-600"
                }`}
              >
                {(data || [])[0]?.changesPercentage}%
              </p>
            </div>
          </div>

          <div className="my-8 flex justify-center">
            <Button className="relative p-2 w-10/12 text-sm font-medium flex items-center border border-amber-400 mb-2 me-2 overflow-hidden rounded-lg group bg-gradient-to-br hover:from-amber-300 hover:to-orange-600  text-white">
              <FaRegStar className="mr-2" />
              Añadir al portafolio
            </Button>
          </div>

          <div>
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-400">Cap. de mercado:</p>
              <p className="text-lg font-bold text-white">
                {formatted((data || [])[0]?.marketCap)}
              </p>
            </div>
            <Separator className="my-4 border border-gray-800" />
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-400">Volumen (24h):</p>
              <p className="text-lg font-bold text-white">
                {formatted((data || [])[0]?.volume)}
              </p>
            </div>
            <Separator className="my-4 border border-gray-800" />
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-400">Volumen Promedio (50 días):</p>
              <p className="text-lg font-bold text-white">
                {formatted((data || [])[0]?.avgVolume)}
              </p>
            </div>
            <Separator className="my-4 border border-gray-800" />
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-400">Rango del Día:</p>
              <p className="text-lg font-bold text-white">
                {formatted((data || [])[0]?.dayLow)} -{" "}
                {formatted((data || [])[0]?.dayHigh)}
              </p>
            </div>
            <Separator className="my-4 border border-gray-800" />
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-400">Rango del Año:</p>
              <p className="text-lg font-bold text-white">
                {formatted((data || [])[0]?.yearLow)} -{" "}
                {formatted((data || [])[0]?.yearHigh)}
              </p>
            </div>
            <Separator className="my-4 border border-gray-800" />
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-400">Fuente:</p>
              <p className="text-lg font-bold text-white">
                Exchange: - {(data || [])[0]?.exchange}
              </p>
            </div>
            <Separator className="my-4 border border-gray-800" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div>{(data || [])[0]?.name}</div>
          <ChartComponent symbol={params.currency} />
        </div>
      </div>
    </>
  );
}
