import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Quiz } from "@/components/features/Quiz";

export const metadata: Metadata = { title: "Jeux — Quiz Matoub" };

export default function JeuxPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Jeux" }]} />
      <SectionTitle tifinagh="ⵉⵎⴻⵍⵍⴰⵍⴻⵏ">Jeux — Quiz Matoub Lounès</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        Testez vos connaissances sur la vie et l'œuvre de Matoub Lounès !
        {" "}8 questions pour devenir un expert du Rebelle.
      </p>

      <div className="max-w-lg">
        <Quiz />
      </div>
    </div>
    </div>
  );
}
