import Title from "@/components/Title/Title";
import MarketTable from "./components/MarketTable";
import TopGainers from "./components/TopGainers";
import TopLosers from "./components/TopLosers";
import TopActives from "./components/TopActives";

const page = () => {
  return (
    <>
      <Title text="Mercados" />
      <div className="px-2 md:px-10 lg:px-20">
      <p className="text-white text-bold text-2xl my-4">Resumen de mercados</p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 my-12 gap-4">
          <TopGainers />
          <TopLosers/>
          <TopActives />
        </div>
        <MarketTable />
      </div>
    </>
  );
};

export default page;
