import { useQuery } from "@tanstack/react-query";
import { getDailyHistorical } from "../services/getDailyHistorical";

export const useGetDailyHistorical = (symbol: string) => {
  return useQuery({
    queryKey: ["daily_information"],
    queryFn: () => getDailyHistorical(symbol),
  });
};
