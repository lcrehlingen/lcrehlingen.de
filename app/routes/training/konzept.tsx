import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import Component from "~/assets/sport-konzept.mdx";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Nachwuchs- und Leistungssportkonzept",
    }
  ]
};

export default function Page() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Nachwuchs- und Leistungssportkonzept" />
      <div className="prose max-w-none text-left">
        <Component />
      </div>
    </ContentContainer>
  );
}
