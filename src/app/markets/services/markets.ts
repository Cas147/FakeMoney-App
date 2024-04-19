import { get } from "@/api";

export const getMartkets = async (market: string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/symbol/available-${market}?apikey=wdichB1hsXDPCB8PSRduQpDZtxck6iw2`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};
