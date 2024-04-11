import { useQuery } from "@tanstack/react-query";
import { getMartkets } from "../services/markets";

export const useGetMarkets = (market: string) => {
  return useQuery({
    queryKey: ["market_information"],
    queryFn: () => getMartkets(market),
  });
};
