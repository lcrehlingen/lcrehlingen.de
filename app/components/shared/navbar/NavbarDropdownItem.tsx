import { Link } from "@remix-run/react";
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
      <Link
        to={to}
        className="flex flex-row items-center gap-3 rounded-lg p-2 hover:bg-gray-200"
      >
        <div className="rounded-lg bg-red-500 p-3 text-white ">{icon}</div>
        <p className="font-semibold">{name}</p>
      </Link>
    </li>
  );
}
