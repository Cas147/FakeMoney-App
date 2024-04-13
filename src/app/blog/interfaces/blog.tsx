export interface IBlogHeader {
  title: string;
  author: string;
  time?: string;
  date: string;
  socialMedias?: {
    instagram?: string;
    x?: string;
  };
  likes?: number;
}

export interface BlogPost extends IBlogHeader {
  description: string;
  mainImage: string;
  sections: {
    title: string;
    content: string;
    imageUrl?: string;
  }[];
}

export interface PostComment {
  id: number;
  user: string;
  date: string;
  content: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
}
