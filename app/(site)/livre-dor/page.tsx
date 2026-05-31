import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GuestbookForm } from "@/components/features/GuestbookForm";

export const metadata: Metadata = { title: "Livre d'or" };

export default function LivreDorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Livre d'or" }]} />
      <SectionTitle tifinagh="ⵉⴷⵍⵉⵙ ⵏ ⵓⵔ">Livre d'or</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        Laissez un message, un hommage ou partagez un souvenir lié à Matoub Lounès.
        Les messages peuvent être écrits en français, en kabyle ou dans toute autre langue.
      </p>

      <GuestbookForm />
    </div>
    </div>
  );
}
