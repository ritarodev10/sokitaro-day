import SookitaroWeddingImage from "../../components/main-image/SookitaroWeddingImage";
import BottomControlsWrapper from "../../components/BottomControlsWrapper";

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
      <div className="relative z-10 flex min-h-dvh flex-col">
        <div className="relative w-full flex-1 flex items-center justify-center pb-10">
          <SookitaroWeddingImage className="w-full h-full max-h-[85vh] md:max-h-[800px] object-contain multiply-blend" />
        </div>
        <BottomControlsWrapper />
      </div>
    </div>
  );
}
