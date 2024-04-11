import { faker } from "@faker-js/faker";
import { forexListMock } from "../../__Mocks__/ForexListMocks";
import { Quote } from "../../interfaces/Quote";

function formatMarketCap(marketCap: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixIndex = 0;

  while (marketCap >= 1000 && suffixIndex < suffixes.length - 1) {
    marketCap /= 1000;
    suffixIndex++;
  }

  return marketCap.toFixed(2).replace(/\.00$/, "") + suffixes[suffixIndex];
}

function generateRandomMarketCap(): string {
  const randomMarketCap = faker.number.int({ min: 1, max: 1000000000000 }); // Adjust the max value as needed
  return formatMarketCap(randomMarketCap);
}

export const getMarketData = (data: any[]): Quote[] => {
  const marketData = (data || []).map((item: any) => {
    return {
      id: item.symbol,
      name: item.name,
      price: "20.5B",
      change: -2,
      volumen: "20.04B",
      cap: "20.04B",
    };
  });

  return marketData;
};
