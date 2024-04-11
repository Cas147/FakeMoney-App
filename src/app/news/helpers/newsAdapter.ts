import {
  OriginalFeed,
  OriginalFeedItem,
  News,
} from "../interfaces/feed";

const newsAdapter = (originalFeed: OriginalFeed): News => {
  const transformedFeed: News = {
    feed: originalFeed?.feed.map((item: OriginalFeedItem) => ({
      title: item.title,
      url: item.url,
      time_published: item.time_published,
      authors: item.authors,
      summary: item.summary,
      image: item.banner_image,
      source: item.source,
      source_domain: item.source_domain,
      category: item.category_within_source,
    })),
    items: originalFeed?.items,
  };
  return transformedFeed;
};

export default newsAdapter;
