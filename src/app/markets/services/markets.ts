import { get } from "@/api";

export const getMartkets = async (market: string): Promise<any | Error> => {
  try {
    const response = await get(
      `api/v3/symbol/available-${market}?apikey=2okSgSIls561jjamoZgsc7bImsS0bbak`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};
