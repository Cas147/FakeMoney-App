import { faker } from "@faker-js/faker";
import { TransformedFeedItem } from "../interfaces/feed";

const generateMockData = (): TransformedFeedItem => {
  return {
    title: faker.lorem.sentence(),
    url: faker.internet.url(),
    time_published: faker.date.recent().toISOString(),
    authors: [faker.person.fullName()],
    summary: faker.lorem.paragraph(),
    image: faker.image.url(),
    source: faker.company.buzzNoun(),
    source_domain: faker.internet.domainName(),
    category: faker.word.adjective(),
  };
};

export const generateMockFeedData = (count: number): TransformedFeedItem[] => {
  return [...Array(count)].map(() => generateMockData());
}
