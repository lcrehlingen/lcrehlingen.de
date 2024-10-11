import { useLocation } from "@remix-run/react";

export default function BackgroundHeader({ title }: { title?: string }) {
  const location = useLocation();
  return (
    <section
      className={`
      relative
      content-center
      items-center
      justify-center
      pt-36
      pb-32
      md:pt-16
      ${location.pathname !== "/" && "hidden md:block"}
    `}
      style={{ minHeight: 50 + "vh" }}
    >
      <div
        className="absolute top-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/_ipx/q_75,f_webp/background.jpg)" }}
      >
        <span className="absolute h-full w-full bg-black opacity-40"></span>
      </div>
      {title && (
        <div className="container relative mx-auto px-4 md:px-10 landscape:mt-32">
          <div className="mx-auto flex w-full  flex-col gap-4 text-center lg:w-8/12">
            <h2 className="text-5xl font-semibold text-white md:text-6xl">
              {title}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}
