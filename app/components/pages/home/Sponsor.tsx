import { Image } from "@unpic/react";

export default function Sponsor() {
  const sponsors = [
    {
      name: "Moore",
      image: "/sponsoren/moore.png",
    },
    {
      name: "Puma M&M",
      image: "/sponsoren/puma_mm.png",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 md:px-10 w-full mt-4">
      <h2 className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase">
        Unsere Sponsoren und Partner
      </h2>
      <div className="flex flex-row items-center justify-center gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="max-w-[140px] md:max-w-[180px] grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              alt={sponsor.name}
              src={sponsor.image}
              width={360}
              height={120}
              cdn="ipx"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
