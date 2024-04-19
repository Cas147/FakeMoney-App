"use client";
import { Card, CardContent } from "@/components/ui/card";
import { losersMock } from "../../__Mocks__/LosersMock";
import EconomicCalendarSkeleton from "@/app/news/components/Skeleton/EconomicCalendarSkeleton";
import Link from "next/link";
import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TopLosers = ({ type }: { type: "complete" | "summary" }) => {
  const PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (losersMock || []).slice(firstPageIndex, lastPageIndex);
  }, [currentPage, losersMock]);
  return (
    <div className="rounded-xl group/item">
      <Card className="w-full rounded-xl p-4">
        <div className="flex justify-between items-center">
          <p className="text-amber-400 font-bold">Principales perdedores</p>
          {type === "summary" && (
            <Link
              href={"/markets/overview"}
              className="text-white font-light text-xs underline"
            >
              ver más
            </Link>
          )}
        </div>
        {false ? (
          <EconomicCalendarSkeleton />
        ) : (
          <>
            {(type === "summary"
              ? losersMock.slice(0, 5)
              : currentTableData
            ).map((item, index) => {
              const formattedPrice = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price);
              return (
                <div key={item.symbol} className="pt-1 md:basis-1/2">
                  <div className="p-1 shadow-sm">
                    <Card className="bg-zinc-950  shadow-slate-500 border-none">
                      <CardContent className="flex justify-between p-6">
                        <Link
                          className="w-full grid grid-cols-3"
                          href={`/markets/${item.symbol}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center">
                                  {type === "complete" && (
                                    <span className="text-xs font-thin text-white mr-2">
                                      {index + 1}.
                                    </span>
                                  )}
                                  <span className="text-xs font-semibold text-white ">
                                    {item.symbol}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-zinc-700 text-white">
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <span className="text-xs font-semibold text-white">
                            {formattedPrice}
                          </span>
                          <span className="text-xs font-semibold text-red-400 ml-2">
                            {item.changesPercentage}%
                          </span>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
            {type === "complete" && (
              <div className="my-2">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={losersMock?.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default TopLosers;
