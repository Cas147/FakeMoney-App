import { get } from "@/api";

export const getFullQuote = async (quote: string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/quote/${quote}?apikey=wdichB1hsXDPCB8PSRduQpDZtxck6iw2`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
