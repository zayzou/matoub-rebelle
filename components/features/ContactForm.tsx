"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Nom requis (2 caractères min.)"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(4, "Sujet requis"),
  message: z.string().min(10, "Message trop court (10 caractères min.)"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");
      setSent(true);
      reset();
    } catch (e) {
      setError("Une erreur est survenue. Réessayez plus tard.");
    }
  };

  if (sent) {
    return (
      <div className="kabyle-card p-8 text-center">
        <div className="mb-4 flex justify-center"><Mail size={40} strokeWidth={1.25} style={{ color: "var(--color-gold)" }} /></div>
        <h3
          className="font-serif text-xl font-bold mb-2"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
        >
          Message envoyé !
        </h3>
        <p style={{ color: "var(--color-silver)" }}>
          Merci pour votre message. Nous vous répondrons dans les meilleurs délais.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 text-sm underline"
          style={{ color: "var(--color-gold)" }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full px-3 py-2 rounded text-sm outline-none transition-colors focus:border-gold";
  const fieldStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "1px solid var(--color-border)",
    color: "var(--color-parchment)",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-silver)" }}>
            Nom *
          </label>
          <input
            {...register("name")}
            className={fieldClass}
            style={fieldStyle}
            placeholder="Votre nom"
          />
          {errors.name && <p className="text-xs mt-1 text-red-400">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-silver)" }}>
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            className={fieldClass}
            style={fieldStyle}
            placeholder="votre@email.com"
          />
          {errors.email && <p className="text-xs mt-1 text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-silver)" }}>
          Sujet *
        </label>
        <input
          {...register("subject")}
          className={fieldClass}
          style={fieldStyle}
          placeholder="Objet de votre message"
        />
        {errors.subject && <p className="text-xs mt-1 text-red-400">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-silver)" }}>
          Message *
        </label>
        <textarea
          {...register("message")}
          rows={6}
          className={fieldClass}
          style={fieldStyle}
          placeholder="Votre message..."
        />
        {errors.message && <p className="text-xs mt-1 text-red-400">{errors.message.message}</p>}
      </div>

      {error && (
        <p className="text-sm text-red-400 px-3 py-2 rounded" style={{ backgroundColor: "rgba(220,38,38,0.1)" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2.5 rounded font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
        style={{
          backgroundColor: "var(--color-gold)",
          color: "var(--color-earth)",
        }}
      >
        {isSubmitting ? (
          <>Envoi en cours…</>
        ) : (
          <><Send size={14} strokeWidth={2} /> Envoyer le message</>
        )}
      </button>
    </form>
  );
}
