import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/components/features/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div className="max-w-lg">
      <BreadcrumbNav items={[{ label: "Contact" }]} />
      <SectionTitle tifinagh="ⴰⵙⵏⴽⴻⴷ">Contact</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        Pour contacter l'administrateur du site, pour proposer du contenu, signaler une erreur ou
        tout simplement partager votre amour pour l'œuvre de Matoub Lounès.
      </p>

      <ContactForm />
    </div>
    </div>
  );
}
