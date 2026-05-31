"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs mb-8 flex-wrap" aria-label="Fil d'ariane">
      <Link
        href="/"
        className="transition-colors hover:opacity-100"
        style={{ color: "var(--color-muted)" }}
      >
        Accueil
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span style={{ color: "var(--color-subtle)", fontSize: "0.5rem" }}>◆</span>
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:opacity-100"
              style={{ color: "var(--color-muted)" }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "var(--color-text)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
