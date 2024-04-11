import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/news";

export const useNews = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ["news_information"],
    queryFn: () => getNews(startDate, endDate),
  });
};
