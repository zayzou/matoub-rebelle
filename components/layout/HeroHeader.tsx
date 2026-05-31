"use client";

import { useEffect, useState } from "react";

const HEADERS = [
  { img: "/images/header/header1.jpg", quote: "Un poète pour l'éternité", sub: "ⴰⵎⴻⴷⵢⴰⵣ ⵉ ⵡⴰⴽⵓⴷ" },
  { img: "/images/header/header3.jpg", quote: "La voix d'un peuple", sub: "ⵜⴰⵙⴻⵍⴽⵉⵎⵜ ⵏ ⵢⵉⵎⴰⵣⵉⵖⴻⵏ" },
  { img: "/images/header/header5.jpg", quote: "Le Rebelle de Kabylie", sub: "ⴰⵏⴰⵣⴱⴰⵢ ⵏ ⵜⵇⴱⴰⵢⵍⵉⵜ" },
  { img: "/images/header/header7.jpg", quote: "Anerrez wala an-neknu", sub: "ⴰⵏⴻⵔⵔⴻⵣ ⵡⴰⵍⴰ ⴰⵏ-ⵏⴻⴽⵏⵓ" },
  { img: "/images/header/header10.jpg", quote: "24 janvier 1956 — 25 juin 1998", sub: "ⵜⴰⵡⵔⵉⵔⵜ ⵎⵓⵙⵙⴰ" },
];

export function HeroHeader() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HEADERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const h = HEADERS[current];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "220px" }}
    >
      {/* Background images cycling */}
      {HEADERS.map((item, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${item.img})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(20,10,5,0.5) 0%, rgba(20,10,5,0.75) 100%)" }}
      />

      {/* Geometric kabyle pattern overlay */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0zm0 4L4 20l16 16 16-16L20 4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold line decoration top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: "linear-gradient(to right, transparent, var(--color-gold), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        {/* Tifinagh symbol */}
        <div
          className="text-2xl mb-2 opacity-60"
          style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-gold)" }}
        >
          ⵎⴰⵟⵓⴱ ⵍⵓⵏⵙ
        </div>

        {/* Main title */}
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-gold)",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Matoub Lounès
        </h1>

        {/* Subtitle cycling */}
        <p
          key={current}
          className="mt-2 text-lg font-medium"
          style={{ color: "var(--color-parchment)", textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
        >
          {h.quote}
        </p>
        <p
          className="mt-1 text-sm opacity-70"
          style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-silver)" }}
        >
          {h.sub}
        </p>

        {/* Dates */}
        <p className="mt-3 text-xs" style={{ color: "var(--color-silver)", textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}>
          24 janvier 1956 — Taourirt Moussa &nbsp;◆&nbsp; 25 juin 1998 — Tala Bounane
        </p>
      </div>

      {/* Gold line decoration bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-gold), var(--color-saffron), var(--color-gold), transparent)",
        }}
      />

      {/* Dots indicator */}
      <div className="absolute bottom-2 right-4 flex gap-1">
        {HEADERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            aria-label={`Image ${i + 1}`}
            style={{
              backgroundColor: i === current ? "var(--color-gold)" : "rgba(201,168,76,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
