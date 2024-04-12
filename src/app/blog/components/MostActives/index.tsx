import { MostActive } from "@/interfaces/markets";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const MostActives = ({ data }: { data: MostActive[] }): JSX.Element => {
  return (
    <>
      <TooltipProvider>
        <div className="flex text-amber-400 text-xl items-center">
          <p className="ml-2">MERCADOS MÁS ACTIVOS</p>
        </div>
        {data.map((item: MostActive) => {
          const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price);
          return (
            <div
              key={item.symbol}
              style={{ borderRadius: "5px" }}
              className={`my-2 px-4 py-6 hover:opacity-80 flex w-full items-center justify-between ${
                item.changesPercentage > 0
                  ? "border-2 border-green-400 bg-green-100"
                  : "border-2 border-red-600 bg-red-100"
              }`}
            >
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="font-bold">{item.symbol}</p>
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-700 text-white">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
                <p className="text-gray-400">{formattedPrice}</p>
              </div>

              <Badge className="bg-white">
                {" "}
                <span
                  className={`text-xs font-semibold ${
                    item.changesPercentage > 0
                      ? "text-green-400"
                      : "text-red-600 ml-2"
                  }`}
                >
                  {item.changesPercentage}%
                </span>
              </Badge>

              <Link
                href={`/markets/${item.symbol}`}
                rel="noopener noreferrer"
                target="_blank"
                className={`text-xs font-semibold h-8 text-white text-center rounded-xl p-2 ${
                  item.changesPercentage > 0 ? "bg-green-400" : "bg-red-600"
                }`}
              >
                Detalle
              </Link>
            </div>
          );
        })}
      </TooltipProvider>
    </>
  );
};
export default MostActives;
