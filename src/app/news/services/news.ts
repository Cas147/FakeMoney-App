import { get } from "@/api";

export const getNews = async (startDate: string, endDate:string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/economic_calendar?from=${startDate}&to=${endDate}&apikey=wdichB1hsXDPCB8PSRduQpDZtxck6iw2`
    );
    return response;
  } catch (error) {
    return error;
  }
};
