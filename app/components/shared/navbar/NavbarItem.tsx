import { NavLink } from "@remix-run/react";

export default function NavbarItem({ name, to }: { name: string; to: string }) {
  const isExternal = to.startsWith("http://") || to.startsWith("https://");

  const baseClass = "rounded-lg px-3 py-2 text-left text-lg font-semibold transition-all duration-200 block lg:inline-block lg:text-base xl:text-lg";

  if (isExternal) {
    return (
      <li>
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClass} text-gray-700 hover:text-red-600 hover:bg-gray-50 lg:hover:bg-transparent`}
        >
          {name}
        </a>
      </li>
    );
  }

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? "text-red-600 bg-red-50/50 lg:bg-transparent"
              : "text-gray-700 hover:text-red-600 hover:bg-gray-50 lg:hover:bg-transparent"
          }`
        }
      >
        {name}
      </NavLink>
    </li>
  );
}
