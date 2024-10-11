import { Link } from "@remix-run/react";

export default function NavbarItem({ name, to }: { name: string; to: string }) {
  return (
    <li>
      <Link
        className="rounded-lg px-3 p-2 text-left
    text-lg
    font-semibold
    hover:bg-gray-200
    md:py-2
    lg:text-xl"
        to={to}
      >
        {name}
      </Link>
    </li>
  );
}
