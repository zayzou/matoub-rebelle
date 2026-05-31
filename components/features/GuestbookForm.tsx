"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  location: z.string().optional(),
  message: z.string().min(5, "Message requis (5 caractères min.)"),
});

type FormData = z.infer<typeof schema>;

interface GuestbookEntry {
  name: string;
  location?: string;
  message: string;
  date: string;
}

const INITIAL_ENTRIES: GuestbookEntry[] = [
  {
    name: "Amazigh2000",
    location: "Tizi-Ouzou, Algérie",
    message: "Matoub vit pour toujours dans nos cœurs. Sa voix ne se taira jamais.",
    date: "2011-01-24",
  },
  {
    name: "KabyleEnFrance",
    location: "Paris, France",
    message: "Je me souviens de la première fois que j'ai entendu A Vava Inouva. J'avais 10 ans. Merci pour ce site.",
    date: "2010-06-25",
  },
  {
    name: "Timlit",
    location: "Béjaïa, Algérie",
    message: "Ahat d amedyaz ameqqran i yella deg twacult n tmazɣa. Matoub ur imut ara.",
    date: "2010-03-15",
  },
];

export function GuestbookForm() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_ENTRIES);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const entry: GuestbookEntry = {
      ...data,
      date: new Date().toISOString().slice(0, 10),
    };
    setEntries([entry, ...entries]);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  const fieldClass = "w-full px-3 py-2 rounded text-sm outline-none transition-colors focus:border-gold";
  const fieldStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "1px solid var(--color-border)",
    color: "var(--color-parchment)",
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="kabyle-card p-5">
        <h3
          className="font-serif font-bold text-base mb-4"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
        >
          Laisser un message
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <input
                {...register("name")}
                className={fieldClass}
                style={fieldStyle}
                placeholder="Votre nom / pseudo *"
              />
              {errors.name && <p className="text-xs mt-1 text-red-400">{errors.name.message}</p>}
            </div>
            <input
              {...register("location")}
              className={fieldClass}
              style={fieldStyle}
              placeholder="Ville, Pays (optionnel)"
            />
          </div>
          <div>
            <textarea
              {...register("message")}
              rows={4}
              className={fieldClass}
              style={fieldStyle}
              placeholder="Votre message (FR, Kabyle, Arabe...)"
            />
            {errors.message && <p className="text-xs mt-1 text-red-400">{errors.message.message}</p>}
          </div>
          {sent && (
            <p className="text-sm text-green-400">✓ Votre message a été ajouté au livre d'or !</p>
          )}
          <button
            type="submit"
            className="px-5 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-earth)" }}
          >
            Signer le livre d'or
          </button>
        </form>
      </div>

      {/* Entries */}
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <div key={i} className="kabyle-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-sm" style={{ color: "var(--color-saffron)" }}>
                {entry.name}
              </span>
              {entry.location && (
                <>
                  <span style={{ color: "var(--color-gold)", fontSize: "0.5rem" }}>◆</span>
                  <span className="text-xs" style={{ color: "var(--color-silver)" }}>
                    {entry.location}
                  </span>
                </>
              )}
              <span className="ml-auto text-xs" style={{ color: "var(--color-silver)" }}>
                {new Date(entry.date).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-parchment)" }}>
              {entry.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
