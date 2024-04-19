import { get } from "@/api";

export const getDailyHistorical = async (symbol: string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/historical-price-full/${symbol}?apikey=wdichB1hsXDPCB8PSRduQpDZtxck6iw2`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};
