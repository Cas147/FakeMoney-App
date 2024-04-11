import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { losersMock } from "../../__Mocks__/LosersMock";
import { gainersMock } from "../../__Mocks__/GainersMock";

const TopGainers = () => {
  return (
    <div className=" p-4 rounded-xl group/item">
      <p className="text-amber-400 font-bold text-sm my-4">
        Principales ganadores
      </p>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {gainersMock.slice(0, 5).map((item) => {
              const formattedPrice = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price);
              return (
                <CarouselItem key={item.symbol} className="pt-1 md:basis-1/2">
                  <div className="p-1 shadow-sm">
                    <Card className="bg-zinc-950  shadow-slate-500 border-none">
                      <CardContent className="flex justify-between p-6">
                        <span className="text-xs font-semibold text-white">
                          {item.symbol}
                        </span>
                        <span className="text-xs font-semibold text-white">
                          {formattedPrice}
                        </span>
                        <span className="text-xs font-semibold text-green-400 ml-2">
                          {item.changesPercentage}%
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="text-white invisible group-hover/item:visible" />
          <CarouselNext className="text-white invisible group-hover/item:visible" />
        </Carousel>
      </div>
    </div>
  );
};

export default TopGainers;
