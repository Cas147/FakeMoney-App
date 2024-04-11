import { get } from "@/api";

export const getFullQuote = async (quote: string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/quote/${quote}?apikey=2okSgSIls561jjamoZgsc7bImsS0bbak`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
