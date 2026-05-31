import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  tifinagh?: string;
  eyebrow?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({
  children,
  tifinagh,
  eyebrow,
  className,
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <Tag
        className="font-bold leading-tight text-gold-gradient"
        style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        {children}
      </Tag>
      {tifinagh && (
        <p
          className="mt-1 text-sm opacity-50"
          style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-sky)" }}
        >
          {tifinagh}
        </p>
      )}
      <div className="kabyle-sep mt-4">
        <span className="kabyle-sep-icon">◆</span>
      </div>
    </div>
  );
}
