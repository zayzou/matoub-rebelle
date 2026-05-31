interface QuoteCardProps {
  quote: string;
  source?: string;
  translation?: string;
  lang?: string;
}

export function QuoteCard({ quote, source, translation, lang }: QuoteCardProps) {
  return (
    <blockquote
      className="kabyle-card p-6 relative"
      style={{
        borderLeft: "3px solid var(--color-gold)",
        borderRadius: "0.5rem",
      }}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-3 left-4 text-5xl leading-none opacity-15 select-none font-serif"
        style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)" }}
      >
        "
      </span>

      <p
        className="relative z-10 text-base leading-relaxed italic pt-3"
        style={{
          fontFamily: lang === "kabyle" ? "var(--font-serif)" : "var(--font-display)",
          color: "var(--color-cream)",
        }}
      >
        {quote}
      </p>

      {translation && (
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "var(--color-silver)" }}
        >
          <em>{translation}</em>
        </p>
      )}

      {source && (
        <footer className="mt-4 flex items-center gap-2">
          <span style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>◆</span>
          <cite
            className="text-xs not-italic"
            style={{ color: "var(--color-silver)" }}
          >
            {source}
          </cite>
        </footer>
      )}
    </blockquote>
  );
}
