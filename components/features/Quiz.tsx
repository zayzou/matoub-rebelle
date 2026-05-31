"use client";

import { useState } from "react";
import { Trophy, Music, BookOpen } from "lucide-react";

const QUESTIONS = [
  {
    q: "Dans quelle commune est né Matoub Lounès ?",
    choices: ["Tizi-Ouzou", "Taourirt Moussa", "Ath Douala", "Béjaïa"],
    answer: 1,
  },
  {
    q: "En quelle année Matoub Lounès a-t-il été assassiné ?",
    choices: ["1995", "1996", "1997", "1998"],
    answer: 3,
  },
  {
    q: "Comment s'appelle la première grande chanson de Matoub ?",
    choices: ["Kenza", "A Vava Inouva", "Tafat", "Yiwen Wass"],
    answer: 1,
  },
  {
    q: "Quelle est la langue principale dans laquelle chantait Matoub Lounès ?",
    choices: ["Arabe", "Français", "Kabyle (Tamazight)", "Tamasheq"],
    answer: 2,
  },
  {
    q: "Dans quel massif montagneux se trouve le village natal de Matoub ?",
    choices: ["Aurès", "Atlas", "Djurdjura", "Hoggar"],
    answer: 2,
  },
  {
    q: "Matoub Lounès fut enlevé par le GIA en quelle année ?",
    choices: ["1992", "1993", "1994", "1995"],
    answer: 2,
  },
  {
    q: "Quel était le surnom de Matoub Lounès ?",
    choices: ["Le Lion", "Le Rebelle", "Le Prophète", "L'Aigle de Kabylie"],
    answer: 1,
  },
  {
    q: "Comment s'appelle la sœur de Matoub qui milite pour la vérité sur son assassinat ?",
    choices: ["Nadia", "Fatima", "Malika", "Houria"],
    answer: 2,
  },
];

export function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUESTIONS[current];

  const handleAnswer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === question.answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 < QUESTIONS.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setDone(true);
      }
    }, 1200);
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    return (
      <div className="kabyle-card p-8 text-center">
        <div className="flex justify-center mb-4">
          {pct >= 70
            ? <Trophy size={44} strokeWidth={1.25} style={{ color: "var(--color-gold)" }} />
            : pct >= 50
            ? <Music size={44} strokeWidth={1.25} style={{ color: "var(--color-sky)" }} />
            : <BookOpen size={44} strokeWidth={1.25} style={{ color: "var(--color-muted)" }} />}
        </div>
        <h3
          className="font-serif text-2xl font-bold mb-2"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
        >
          {pct >= 70 ? "Excellent !" : pct >= 50 ? "Bien !" : "Apprenez encore…"}
        </h3>
        <p className="text-lg mb-1" style={{ color: "var(--color-parchment)" }}>
          Score : <strong style={{ color: "var(--color-saffron)" }}>{score}/{QUESTIONS.length}</strong>
        </p>
        <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
          {pct >= 70
            ? "Vous connaissez bien l'œuvre et la vie de Matoub Lounès !"
            : "Parcourez le site pour en apprendre davantage sur le Rebelle."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 rounded font-semibold text-sm transition-colors"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-earth)",
          }}
        >
          Rejouer
        </button>
      </div>
    );
  }

  return (
    <div className="kabyle-card p-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs" style={{ color: "var(--color-silver)" }}>
          Question {current + 1} / {QUESTIONS.length}
        </span>
        <div
          className="h-1 rounded-full flex-1 mx-3 overflow-hidden"
          style={{ backgroundColor: "var(--color-border)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((current + 1) / QUESTIONS.length) * 100}%`,
              backgroundColor: "var(--color-gold)",
            }}
          />
        </div>
        <span className="text-xs font-bold" style={{ color: "var(--color-gold)" }}>
          {score} pts
        </span>
      </div>

      {/* Question */}
      <h3
        className="text-base font-semibold mb-5 leading-relaxed"
        style={{ color: "var(--color-parchment)" }}
      >
        {question.q}
      </h3>

      {/* Choices */}
      <div className="grid grid-cols-1 gap-2">
        {question.choices.map((choice, i) => {
          let bg = "var(--color-card)";
          let color = "var(--color-parchment)";
          let border = "var(--color-border)";

          if (selected !== null) {
            if (i === question.answer) {
              bg = "rgba(85,139,47,0.25)";
              color = "#a3e673";
              border = "#558B2F";
            } else if (i === selected) {
              bg = "rgba(220,38,38,0.2)";
              color = "#fca5a5";
              border = "#dc2626";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              className="w-full text-left px-4 py-3 rounded text-sm transition-all duration-200 border hover:scale-[1.01]"
              style={{
                backgroundColor: bg,
                color,
                borderColor: border,
                cursor: selected !== null ? "default" : "pointer",
              }}
            >
              <span className="font-bold mr-2" style={{ color: "var(--color-gold)" }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );
}
