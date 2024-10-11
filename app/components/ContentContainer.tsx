import type { ReactNode } from "react";
import BackgroundHeader from "./BackgroundHeader";

export default function ContentContainer({
  children,
  className = "",
  withHeader = true,
}: {
  children: ReactNode;
  withHeader?: boolean;
  className?: string;
}) {
  return (
    <>
      {withHeader && (
        <BackgroundHeader />
      )}
      <section className="container mx-auto mb-12 px-0 pt-96 md:mb-36 md:px-10 md:pt-16">
        <div
          className={`relative -mt-64 flex w-full flex-col bg-white px-4 md:rounded-lg md:px-10 md:pb-4 md:pt-4 md:shadow-xl ${className}`}
        >
          {children}
        </div>
      </section>
    </>
  );
}
