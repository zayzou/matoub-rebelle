import { Metadata } from "next";
import { BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import biblioData from "@/content/bibliographie.json";

export const metadata: Metadata = { title: "Bibliographie" };

const ROLE_COLORS: Record<string, string> = {
  Autobiographie: "rgba(255,179,0,0.15)",
  Témoignage:     "rgba(0,137,123,0.12)",
  Biographie:     "rgba(42,90,200,0.15)",
  Essai:          "rgba(230,74,25,0.12)",
  Portrait:       "rgba(0,137,123,0.12)",
  Anthologie:     "rgba(42,90,200,0.15)",
  Hommage:        "rgba(255,179,0,0.15)",
};
const ROLE_TEXT: Record<string, string> = {
  Autobiographie: "#FFB300",
  Témoignage:     "#00897B",
  Biographie:     "#5B8DEF",
  Essai:          "#E64A19",
  Portrait:       "#00897B",
  Anthologie:     "#5B8DEF",
  Hommage:        "#FFB300",
};

export default function BibliographiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "Divers" }, { label: "Bibliographie" }]} />
      <SectionTitle tifinagh="ⵉⴷⵍⵉⵙⴻⵏ">Bibliographie</SectionTitle>

      <p className="text-sm mb-8" style={{ color: "var(--color-silver)" }}>
        {biblioData.length} ouvrages — livres, biographies et essais consacrés à Matoub Lounès.
      </p>

      <div className="space-y-4">
        {biblioData.map((book) => {
          const roleColor = ROLE_COLORS[book.role ?? ""] ?? "rgba(255,179,0,0.1)";
          const roleText  = ROLE_TEXT[book.role ?? ""]  ?? "#FFB300";
          const Wrapper = book.amazon ? "a" : "div";
          const wrapperProps = book.amazon
            ? { href: book.amazon, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper key={book.id} {...wrapperProps}
              className={`kabyle-card p-5 flex gap-4 items-start${book.amazon ? " hover:border-[var(--color-gold)] cursor-pointer transition-colors" : ""}`}
              style={{ textDecoration: "none", display: "flex" }}
            >

              {/* Cover */}
              <div className="w-16 shrink-0 rounded overflow-hidden"
                style={{ border: "1px solid var(--color-border)", minHeight: "88px" }}>
                {book.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={book.cover} alt={book.title}
                    className="w-full object-cover" style={{ minHeight: "88px" }} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: "rgba(42,90,200,0.1)", minHeight: "88px" }}>
                    <BookOpen size={22} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  {book.role && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: roleColor, color: roleText }}>
                      {book.role}
                    </span>
                  )}
                  {(book as { isNew?: boolean }).isNew && (
                    <span className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(230,74,25,0.15)", color: "#E64A19" }}>
                      <Sparkles size={10} />
                      Nouveau 2024
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-base leading-snug mb-0.5"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-parchment)" }}>
                  {book.title}
                </h3>

                {/* Author + meta */}
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-gold)" }}>
                  {book.author}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs mb-2"
                  style={{ color: "var(--color-muted)" }}>
                  <span>{book.publisher}</span>
                  <span>•</span>
                  <span>{book.year}</span>
                  {book.pages && <><span>•</span><span>{book.pages} pages</span></>}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--color-silver)" }}>
                  {book.description}
                </p>

              </div>
            </Wrapper>
          );
        })}
      </div>

      {/* Global Amazon search link */}
      <div className="mt-10 text-center">
        <a
          href="https://www.amazon.fr/s?k=Matoub+Loun%C3%A8s&i=stripbooks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "rgba(255,153,0,0.12)", color: "#FF9900",
            border: "1px solid rgba(255,153,0,0.3)" }}
        >
          Tous les livres sur Amazon.fr
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}
