import Title from "@/components/Title/Title";
import TopGainers from "../components/TopGainers";
import TopLosers from "../components/TopLosers";
import TopActives from "../components/TopActives";

const page = () => {
  return (
    <div className="px-2 lg:px-20">
      <Title text="Mercados" />
      <p className="text-white text-bold text-2xl my-4">Resumen de mercados</p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 my-8 gap-4">
        <TopGainers type="complete" />
        <TopLosers type="complete" />
        <TopActives type="complete" />
      </div>
    </div>
  );
};

export default page;
