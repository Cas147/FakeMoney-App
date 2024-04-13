import { BlogPost, IBlogHeader, TableOfContentsItem } from "../interfaces/blog";

export function adaptBlogPostHeader(blogPost: BlogPost): IBlogHeader {
  const { title, author, time, likes, socialMedias, date } = blogPost;

  const adaptedBlogHeader: IBlogHeader = {
    title,
    author,
    time,
    date,
    socialMedias: {
      instagram: socialMedias?.instagram,
      x: socialMedias?.x,
    },
    likes,
  };

  return adaptedBlogHeader;
}

export const adaptToTableOfContents = (
  blogPost: BlogPost
): TableOfContentsItem[] => {
  return blogPost.sections.map((section) => ({
    id: section.title.toLowerCase().replace(/\s+/g, "-"),
    text: section.title,
  }));
};
