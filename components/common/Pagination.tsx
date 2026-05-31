"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseHref: string;
}

export function Pagination({ currentPage, totalPages, baseHref }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={`${baseHref}?page=${currentPage - 1}`}
          className="px-3 py-1 rounded border text-sm transition-colors"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-silver)",
            backgroundColor: "var(--color-card)",
          }}
        >
          ← Précédent
        </Link>
      )}
      {pages.map((p) => (
        <Link
          key={p}
          href={`${baseHref}?page=${p}`}
          className={cn(
            "px-3 py-1 rounded border text-sm font-medium transition-colors",
            p === currentPage
              ? "border-gold bg-gold/10 text-gold"
              : "border-border text-silver hover:border-gold hover:text-parchment"
          )}
          style={{
            borderColor: p === currentPage ? "var(--color-gold)" : "var(--color-border)",
            backgroundColor: p === currentPage ? "rgba(201,168,76,0.1)" : "var(--color-card)",
            color: p === currentPage ? "var(--color-gold)" : "var(--color-silver)",
          }}
        >
          {p}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${baseHref}?page=${currentPage + 1}`}
          className="px-3 py-1 rounded border text-sm transition-colors"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-silver)",
            backgroundColor: "var(--color-card)",
          }}
        >
          Suivant →
        </Link>
      )}
    </nav>
  );
}
