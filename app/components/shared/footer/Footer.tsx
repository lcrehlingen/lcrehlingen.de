import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-800 py-12 font-source-sans text-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3">
            <Link to="/kontakt" className="text-3xl font-semibold">
              Kontakt
            </Link>
            <address
              className="flex flex-col gap-2 not-italic"
            >
              <a
                href="https://goo.gl/maps/jQbZfb5od2j4bcb49"
                className="flex flex-col font-semibold md:gap-1 lg:flex-row"
              >
                <span>Beckinger Str. 31a</span>
                <span>66780</span>
                <span>Rehlingen-Siersburg</span>
              </a>

              <a href="mailto:info@lcrehlingen.de" className="font-semibold">
                <span>info@lcrehlingen.de</span>
              </a>
            </address>
          </div>

          <div className="flex justify-end text-right">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-4">
                <a
                  aria-label="Instagram"
                  target="_blank"
                  className="h-10 w-10"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/lcrehlingen/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Instagram"
                    className="h-10 w-10"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" rx="15%" id="b" />
                    <use fill="url(#a)" xlinkHref="#b" />
                    <use fill="url(#c)" xlinkHref="#b" />
                    <radialGradient id="a" cx=".4" cy="1" r="1">
                      <stop offset=".1" stopColor="#fd5" />
                      <stop offset=".5" stopColor="#ff543e" />
                      <stop offset="1" stopColor="#c837ab" />
                    </radialGradient>
                    <linearGradient id="c" x2=".2" y2="1">
                      <stop offset=".1" stopColor="#3771c8" />
                      <stop offset=".5" stopColor="#60f" stopOpacity="0" />
                    </linearGradient>
                    <g fill="none" stroke="#fff" strokeWidth="30">
                      <rect width="308" height="308" x="102" y="102" rx="81" />
                      <circle cx="256" cy="256" r="72" />
                      <circle cx="347" cy="165" r="6" />
                    </g>
                  </svg>
                </a>
                <a
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10"
                  href="https://www.facebook.com/pages/Freunde-des-LC-Rehlingen/268642303206477"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Facebook"
                    viewBox="0 0 512 512"
                    className="h-10 w-10"
                  >
                    <rect width="512" height="512" rx="15%" fill="#1877f2" />
                    <path
                      d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </div>

              <ul className="list-unstyled flex flex-col items-end gap-2">
                <li>
                  <Link to="/impressum" className="block font-semibold">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="/datenschutz" className="block font-semibold">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <a href="/satzung.pdf" className="block font-semibold">
                    Satzung
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
