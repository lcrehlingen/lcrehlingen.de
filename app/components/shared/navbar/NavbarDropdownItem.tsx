import { NavLink } from "@remix-run/react";
import type { ReactNode } from "react";

export default function NavbarDropdownItem({
  name,
  to,
  icon,
}: {
  name: string;
  to: string;
  icon: ReactNode;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-row items-center gap-4 rounded-xl p-2.5 transition-all duration-200 ${
            isActive
              ? "bg-red-50 text-red-600 font-bold"
              : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <div
              className={`rounded-xl p-2.5 text-white transition-all duration-200 ${
                isActive
                  ? "bg-red-600 shadow-md shadow-red-200/50"
                  : "bg-red-500"
              }`}
            >
              {icon}
            </div>
            <span className="font-semibold text-sm lg:text-base">{name}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}
