import type { Metadata } from "next";
import { gsx8s } from "@/lib/models/gsx8s";
import { ModelPage } from "@/components/model/ModelPage";

export const metadata: Metadata = {
  title: `${gsx8s.seo.title}`,
  description: gsx8s.seo.description,
  alternates: { canonical: `/${gsx8s.slug}` },
};

export default function Page() {
  return <ModelPage model={gsx8s} />;
}

