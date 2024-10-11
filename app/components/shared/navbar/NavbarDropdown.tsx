import React, { useEffect, useRef, useState } from "react";

export default function NavbarDropdown({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <li ref={ref} className="relative h-min" onClick={() => setOpen(!open)}>
        <button
          className="
        rounded-lg
        px-3
        text-lg
        font-semibold
        md:py-2
        md:hover:bg-gray-200
        lg:text-xl
      "
        >
          {name}
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`
          ml-1
          inline
          h-4
            w-4
          rotate-0
          transform
          transition-transform
          duration-200
          md:hidden
          ${open ? "-rotate-90" : "rotate-0"}
        `}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`
        relative
        right-0
        mt-0 w-full
        rounded-md
        bg-white
        md:absolute
        md:mt-10
        md:w-max
        md:max-w-screen-sm
        ${open ? "block" : "hidden"}
      `}
        >
          <div className="py-0 px-0 md:px-2 md:py-2">
            <ul
              className={`grid gap-0 md:gap-4 ${
                React.Children.count(children) <= 3
                  ? "grid-cols-1"
                  : "grid-cols-1 xl:grid-cols-2"
              }`}
            >
              {children}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
