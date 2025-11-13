// Article slugs that should be statically generated
const articleSlugs = ["headline", "article-2"];

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ArticlePage() {
  return null;
}
