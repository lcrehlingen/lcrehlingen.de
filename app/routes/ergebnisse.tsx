import type {  MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getEvents } from "~/.server/events";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Wettkampfergebnisse",
    }
  ]
};

export async function loader() {
  const results = await getEvents({ results: true }).then((res) => {
    return res.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  });
  const years: number[] = [];
  results
    .forEach((result) => {
      const year = new Date(result.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
    });
  return json({
    results: results.reverse(),
    years: years.reverse(),
  });
}

export default function ResultPage() {
  const { results, years } = useLoaderData<typeof loader>();
  return (
    <ContentContainer>
      <Title name="Wettkampfergebnisse" />
      <div className="w-full overflow-x-auto">
        <table className="whitespace-no-wrap w-full">
          {years.map((year) => (
            <tbody key={year} className="divide-y bg-white">
              <tr>
                <td>
                  <p className="text-bold my-4 max-w-min rounded-md p-3 text-3xl ">
                    {year}
                  </p>
                </td>
              </tr>
              {results
                .filter(
                  (result) => new Date(result.date).getFullYear() === year
                )
                .map((result, index) => (
                  <tr key={index} className="text-gray-700 even:bg-gray-300">
                    <td className="px-4 py-3">
                      <time className="font-semibold">
                        {new Date(result.date).toLocaleDateString("de-DE", {
                          timeZone: "Europe/Berlin",
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </time>
                    </td>
                    <td className="px-4 py-3">
                      <p>{result.name}</p>
                    </td>
                    <td className="px-4 py-3">
                      <Link to={`/veranstaltungen/${result.slug}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-6 md:w-6"
                          viewBox="0 0 512 512"
                        >
                          <path d="M480.6 341.4c-11.3 0-20.4 9.1-20.4 20.4v98.4H51.8v-98.4c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v118.8c0 11.3 9.1 20.4 20.4 20.4h449.2c11.3 0 20.4-9.1 20.4-20.4V361.8c0-11.3-9.1-20.4-20.4-20.4z" />
                          <path d="M241 365.6c11.5 11.6 25.6 5.2 29.9 0l117.3-126.2c7.7-8.3 7.2-21.2-1.1-28.9-8.3-7.7-21.2-7.2-28.8 1.1l-81.9 88.1V34.5c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v265.3l-81.9-88.1c-7.7-8.3-20.6-8.7-28.9-1.1-8.3 7.7-8.7 20.6-1.1 28.9L241 365.6z" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          ))}
        </table>
      </div>
    </ContentContainer>
  );
}
