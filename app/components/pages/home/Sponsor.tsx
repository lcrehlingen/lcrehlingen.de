import { Image } from "@unpic/react";

export default function Sponsor() {
  const sponsors = [
    {
      name: "",
      image: "",
    },
    {
      name: "Moore",
      image: "/sponsoren/moore.png",
    },
    {
      name: "Puma M&M",
      image: "/sponsoren/puma_mm.png",
    },
    {
      name: "",
      image: "",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-2 px-4 md:px-10 lg:max-w-6xl">
      <h2 className="text-center text-5xl font-semibold">
        Unsere Sponsoren und Partner
      </h2>
      <div className="flex justify-center">
        <ul className="grid grid-cols-4 gap-3 md:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <li key={index}>
              {/*{index === 1 ? (
                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10 md:invisible" />
              ) : (*/}
              {sponsor.name === "" ? (
                <div></div>
              ) : (
                <Image
                  alt={sponsor.name}
                  src={sponsor.image}
                  width={1920}
                  height={720}
                  cdn="ipx"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
