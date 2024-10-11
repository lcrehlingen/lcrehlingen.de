import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import Component from "~/assets/reha.mdx";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Reha - Sport",
    }
  ]
};

export default function RehaPage() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Reha - Sport" />
      <div className="prose max-w-none text-left">
        <Component />
      </div>
    </ContentContainer>
  );
}
