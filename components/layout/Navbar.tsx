"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const NAV: NavItem[] = [
  {
    label: "Le Rebelle",
    children: [
      { label: "Sa vie",               href: "/le-rebelle/sa-vie" },
      { label: "Biographie complète",  href: "/le-rebelle/biographie" },
      { label: "Son combat",           href: "/le-rebelle/son-combat" },
      { label: "Son œuvre",            href: "/le-rebelle/son-oeuvre" },
      { label: "Lounès a dit…",        href: "/le-rebelle/lounes-a-dit" },
      { label: "Dossier assassinat",   href: "/le-rebelle/dossier-assassinat" },
    ],
  },
  { label: "Discographie", href: "/discographie" },
  { label: "Paroles",      href: "/paroles" },
  {
    label: "Audio",
    children: [
      { label: "Lecteur de chansons", href: "/audio" },
      { label: "Extraits d'albums",   href: "/audio/extraits" },
      { label: "Émissions de radio",  href: "/audio/emissions-radio" },
    ],
  },
  {
    label: "Vidéos",
    children: [
      { label: "Interviews",            href: "/videos/interviews" },
      { label: "Matoub chante",         href: "/videos/matoub-chante" },
      { label: "Chansons sous-titrées", href: "/videos/chansons-sous-titrees" },
      { label: "Ils parlent de Matoub", href: "/videos/ils-parlent-de-matoub" },
    ],
  },
  {
    label: "Photos",
    children: [
      { label: "Pochettes d'album",    href: "/photos/pochettes-albums" },
      { label: "Photos personnelles",  href: "/photos/personnelles" },
      { label: "Sur scène",            href: "/photos/sur-scene" },
      { label: "Chez Matoub",          href: "/photos/chez-matoub" },
    ],
  },
  {
    label: "Plus",
    children: [
      { label: "Actualités",    href: "/news" },
      { label: "Bibliographie", href: "/divers/bibliographie" },
      { label: "Liens",         href: "/divers/liens" },
      { label: "Livre d'or",   href: "/livre-dor" },
      { label: "Jeux",          href: "/jeux" },
      { label: "Contact",       href: "/contact" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href) return pathname === item.href || pathname.startsWith(item.href + "/");
    if (item.children) return item.children.some(c => pathname.startsWith(c.href));
    return false;
  };

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(253,248,241,0.97)" : "rgba(253,248,241,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(180,140,80,0.25)"
            : "1px solid rgba(180,140,80,0.12)",
          boxShadow: scrolled ? "0 2px 20px rgba(180,120,30,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-6">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold shrink-0 text-lg"
              style={{
                background: "linear-gradient(135deg, #C8860A, #E8A820)",
                color: "#FFFFFF",
                fontFamily: "var(--font-tifinagh)",
              }}
            >
              ⵣ
            </div>
            <div className="leading-none">
              <span
                className="block font-bold text-base text-gold-gradient"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.01em" }}
              >
                Matoub Lounès
              </span>
              <span
                className="block text-xs opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-sky)" }}
              >
                ⵎⴰⵟⵓⴱ ⵍⵓⵏⵙ
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`nav-link-animated px-3.5 py-2 text-sm font-medium transition-colors ${isActive(item) ? "active" : ""}`}
                    style={{ color: isActive(item) ? "var(--color-gold)" : "var(--color-text)" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    onMouseEnter={() => setOpenMenu(item.label)}
                    className={`nav-link-animated ${isActive(item) ? "active" : ""} flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors`}
                    style={{ color: isActive(item) ? "var(--color-gold)" : "var(--color-text)" }}
                  >
                    {item.label}
                    <ChevronDown
                      size={11}
                      strokeWidth={2.5}
                      style={{
                        opacity: 0.45,
                        transform: openMenu === item.label ? "rotate(180deg)" : "none",
                        transition: "transform 0.18s",
                      }}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && openMenu === item.label && (
                  <div
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute top-full left-0 mt-1.5 min-w-48 rounded-xl overflow-hidden z-50"
                    style={{
                      background: "rgba(253,248,241,0.99)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(180,140,80,0.2)",
                      boxShadow: "0 16px 40px rgba(180,120,30,0.12), 0 0 0 1px rgba(200,134,10,0.05)",
                    }}
                  >
                    <div className="py-1">
                      {item.children.map((child, i) => {
                        const active = pathname === child.href || pathname.startsWith(child.href + "/");
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-white/[0.06]"
                            style={{
                            color: active ? "var(--color-gold)" : "var(--color-text)",
                              borderBottom: i < item.children!.length - 1 ? "1px solid rgba(180,140,80,0.1)" : "none",
                              fontWeight: active ? 600 : 400,
                            }}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2">
            {/* FR/Kabyle toggle */}
            <div
              className="hidden sm:flex items-center gap-0.5 p-1 rounded-lg"
              style={{ background: "rgba(200,134,10,0.08)", border: "1px solid rgba(200,134,10,0.18)" }}
            >
              <span
                className="px-2 py-0.5 rounded text-xs font-bold"
                style={{ background: "var(--color-gold)", color: "#FFFFFF" }}
              >FR</span>
              <span
                className="px-2 py-0.5 rounded text-xs cursor-pointer opacity-50 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-text)" }}
              >ⴽⴱⵍ</span>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{
                background: mobileOpen ? "rgba(200,134,10,0.1)" : "rgba(200,134,10,0.07)",
                border: "1px solid rgba(200,134,10,0.2)",
                color: "var(--color-text)",
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} strokeWidth={2} /> : <MenuIcon size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 overflow-y-auto"
          style={{
            background: "rgba(253,248,241,0.99)",
            backdropFilter: "blur(20px)",
            top: "64px",
            borderTop: "1px solid rgba(180,140,80,0.15)",
          }}
        >
          <div className="max-w-md mx-auto p-6">
            {NAV.map((item) => (
              <div key={item.label} className="mb-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      background: isActive(item) ? "rgba(255,179,0,0.08)" : "transparent",
                      color: isActive(item) ? "var(--color-gold)" : "var(--color-text)",
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div
                      className="px-4 pt-5 pb-2 text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {item.label}
                    </div>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                        style={{
                          color: pathname === child.href ? "var(--color-gold)" : "var(--color-text)",
                          background: pathname === child.href ? "rgba(255,179,0,0.1)" : "transparent",
                          fontWeight: pathname === child.href ? 600 : 500,
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
