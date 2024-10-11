import type { MetaFunction } from "@remix-run/node";
import ContentContainer from "~/components/ContentContainer";
import Hero from "~/components/pages/kontakt/hero/Hero";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Kontakt",
    }
  ]
};

export default function ContactPage() {
  return (
    <ContentContainer>
      <Hero />
    </ContentContainer>
  );
}
