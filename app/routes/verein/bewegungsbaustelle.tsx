import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import Component from "~/assets/bewegungsbaustelle.mdx";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Kids in Bewegung",
    }
  ]
};

export default function WandergruppePage() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Kids in Bewegung" />
      <div className="prose max-w-none text-left">
        <Component />
      </div>
    </ContentContainer>
  );
}
