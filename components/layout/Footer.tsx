import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Le Rebelle",
    links: [
      { label: "Sa vie", href: "/le-rebelle/sa-vie" },
      { label: "Biographie", href: "/le-rebelle/biographie" },
      { label: "Son combat", href: "/le-rebelle/son-combat" },
      { label: "Dossier assassinat", href: "/le-rebelle/dossier-assassinat" },
    ],
  },
  {
    title: "Œuvre",
    links: [
      { label: "Discographie", href: "/discographie" },
      { label: "Paroles", href: "/paroles" },
      { label: "Vidéos", href: "/videos/matoub-chante" },
      { label: "Audio", href: "/audio" },
    ],
  },
  {
    title: "Explorer",
    links: [
      { label: "Actualités", href: "/news" },
      { label: "Photos", href: "/photos/personnelles" },
      { label: "Bibliographie", href: "/divers/bibliographie" },
      { label: "Livre d'or", href: "/livre-dor" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, var(--color-surface), var(--color-surface-2))",
        borderTop: "1px solid rgba(180,140,80,0.2)",
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold"
              style={{
                background: "linear-gradient(135deg, #C8860A, #E8A820)",
                color: "#FFFFFF",
                fontFamily: "var(--font-tifinagh)",
              }}
            >
              ⵣ
            </div>
            <div>
              <span
                className="block font-bold text-sm text-gold-gradient"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Matoub Lounès
              </span>
              <span
                className="block text-xs opacity-40"
                style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-sky)" }}
              >
                ⵎⴰⵟⵓⴱ ⵍⵓⵏⵙ
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
            Site dédié à la mémoire et à l'œuvre du poète rebelle kabyle.
            24 janvier 1956 — 25 juin 1998.
          </p>
          <div className="flex gap-2">
            <span
              className="px-2 py-1 rounded text-xs font-bold"
              style={{ background: "rgba(255,179,0,0.12)", border: "1px solid rgba(255,179,0,0.25)", color: "var(--color-gold)" }}
            >
              ⴰⵏⴰⵣⴱⴰⵢ
            </span>
            <span
              className="px-2 py-1 rounded text-xs font-bold"
              style={{ background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.25)", color: "var(--color-sky)" }}
            >
              ⵜⴰⵎⴰⵣⵉⵖⵜ
            </span>
          </div>
        </div>

        {/* Nav columns */}
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-gold)" }}
            >
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:opacity-100"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(42,90,200,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-xs" style={{ color: "var(--color-subtle)" }}>
              © Site dédié à la mémoire de Matoub Lounès · Non-officiel · À but non lucratif
            </p>
            <span className="text-xs text-gray-400 hidden sm:inline">·</span>
            <p className="text-xs" style={{ color: "var(--color-subtle)" }}>
              Développé par <span className="font-semibold">Zahir</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs transition-opacity hover:opacity-80" style={{ color: "var(--color-subtle)" }}>
              Contact
            </Link>
            <Link href="/plan-du-site" className="text-xs transition-opacity hover:opacity-80" style={{ color: "var(--color-subtle)" }}>
              Plan du site
            </Link>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-tifinagh)", color: "rgba(255,179,0,0.3)" }}
            >
              ⵣ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
