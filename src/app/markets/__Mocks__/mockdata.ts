import { Quote } from "../interfaces/Quote";
import { forexListMock } from "./ForexListMocks";
import { faker } from "@faker-js/faker";

export function formatMarketCap(marketCap: number): string {
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

export const mockData: Quote[] =
  forexListMock.map((item: any) => {
    return {
      id: item.symbol,
      name: item.name,
      price: generateRandomMarketCap(),
      change: faker.number.float({ min: -5, max: 6, multipleOf: 0.02 }),
      volumen: generateRandomMarketCap(),
      cap: generateRandomMarketCap(),
    };
  }) || [];
