import { EventData, CurrencyOption } from "../interfaces/news";

export const getAllCurrencies = (eventData: EventData[]): CurrencyOption[] => {
  const uniqueCurrencies = new Set<string>();
  eventData.forEach((event) => {
    uniqueCurrencies.add(event.currency);
  });
  return Array.from(uniqueCurrencies).map((currency) => ({
    value: currency,
    label: currency,
  }));
};
