export type EventData = {
  date: string;
  country: string;
  event: string;
  currency: string;
  previous: number | null;
  estimate: number | null;
  actual: number | null;
  change: number | null;
  impact: null | "Low" | "Medium" | "High" | "None";
  changePercentage: number;
};

export type CurrencyOption = {
  value: string;
  label: string;
};
export type NewsArticle = {
  title: string;
  date?: string;
  content: string;
  tickers?: string;
  image?: string;
  link?: string;
  author?: string;
  site?: string;
};
