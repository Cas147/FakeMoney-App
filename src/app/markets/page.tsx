"use client";
import { useState, useMemo } from "react";
import Title from "@/components/Title/Title";
import MarketTable from "./components/MarketTable";
import TopGainers from "./components/TopGainers";
import TopLosers from "./components/TopLosers";
import TopActives from "./components/TopActives";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMarkets } from "./hooks/useGetMarket";
import Pagination from "@/components/Pagination";
import CurrenciesTable from "./components/MarketTableV2";
import { getMarketData } from "./helpers/marketsInfoAdapters";

const Page = () => {
  const [activeTab, setActiveTab] = useState<string>("cryptocurrencies");
  const { data, isLoading } = useGetMarkets(activeTab);

  return (
    <div className="px-2 lg:px-20">
      <Title text="Mercados" />
      <p className="text-white text-bold text-2xl my-4">Resumen de mercados</p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 my-8 gap-4">
        <TopGainers type="summary" />
        <TopLosers type="summary" />
        <TopActives type="summary" />
      </div>

      <p className="text-center text-white font-bold text-xl md:text-4xl my-12">
        Explora los mercados financieros digitales y tradicionales.
      </p>

      <Tabs defaultValue="cryptocurrencies" className="my-12">
        <TabsList className="grid grid-cols-4 bg-slate-600">
          <TabsTrigger
            className="text-white data-[state=active]:bg-amber-400"
            value="favorites"
            onClick={() => setActiveTab("favorites")}
          >
            Favoritos
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:bg-amber-400"
            value="cryptocurrencies"
            onClick={() => setActiveTab("cryptocurrencies")}
          >
            Crypto
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:bg-amber-400"
            value="forex-currency-pairs"
            onClick={() => setActiveTab("forex-currency-pairs")}
          >
            Forex
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:bg-amber-400"
            value="commodities"
            onClick={() => setActiveTab("commodities")}
          >
            Comodities
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <CurrenciesTable data={getMarketData(data) ?? []}/>
    </div>
  );
};

export default Page;
