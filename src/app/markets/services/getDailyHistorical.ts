import { get } from "@/api";

export const getDailyHistorical = async (symbol: string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/historical-price-full/${symbol}?apikey=2okSgSIls561jjamoZgsc7bImsS0bbak`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};
