import { useQuery } from "@tanstack/react-query";
import { getFullQuote } from "../services/getFullQuote";

export const useGetQuote = (quote: string) => {
  return useQuery({
    queryKey: ["full_quote_information"],
    queryFn: () => getFullQuote(quote),
  });
};
