import SookitaroWeddingImage from "../../components/main-image/SookitaroWeddingImage";

// Article slugs that should be statically generated
const articleSlugs = ["headline", "article-2"];

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ArticlePage() {
  return (
    <div className="paper-craft-background">
      <div className="relative z-10 flex min-h-dvh items-center justify-center">
        <div className="relative w-full h-dvh flex items-center justify-center">
          <SookitaroWeddingImage className="w-full h-full md:h-[900px] object-contain multiply-blend" />
        </div>
      </div>
    </div>
  );
}
