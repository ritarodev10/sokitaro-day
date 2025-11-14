// Article slugs that should be statically generated
const articleSlugs = [
  "headline",
  "article-2",
  "article-3",
  "our-story",
  "event-schedule",
  "maps",
];

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ArticlePage() {
  return null;
}
