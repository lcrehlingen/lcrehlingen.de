import Image from "~/components/shared/image/Image";

export default function Sponsor() {
  const sponsors = [
    {
      name: "NTA",
      image: "/sponsoren/nta_atos.png",
    },
    {
      "name": "",
      "image": "",
    },
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
    <section className="flex flex-col items-center justify-center gap-2 px-4 md:px-10 lg:max-w-6xl">
      <h2 className="text-center text-5xl font-semibold">
        Unsere Sponsoren und Partner
      </h2>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <li key={index}>
              {index === 1 ? (
                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10 md:invisible" />
              ) : (
                <Image
                  alt={sponsor.name}
                  src={sponsor.image}
                  width={1920}
                  height={720}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
