export interface OriginalFeedItem {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string;
  source: string;
  category_within_source: string;
  source_domain: string;
}

export interface OriginalFeed {
  feed: OriginalFeedItem[];
  items: string;
  relevance_score_definition: string;
  sentiment_score_definition: string;
}

export interface TransformedFeedItem {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  image: string;
  source: string;
  source_domain: string;
  category: string;
}

export interface News {
  feed: TransformedFeedItem[];
  items: string;
}
