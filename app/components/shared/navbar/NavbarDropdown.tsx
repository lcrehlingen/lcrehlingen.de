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
    <li
      ref={ref}
      className="relative group h-min list-none"
      onClick={() => {
        if (window.innerWidth < 1024) {
          setOpen(!open);
        }
      }}
    >
      <button
        type="button"
        className={`
          w-full
          flex
          items-center
          justify-between
          rounded-lg
          px-3
          py-2
          text-lg
          font-semibold
          text-gray-700
          transition-colors
          duration-200
          hover:text-red-600
          hover:bg-gray-50
          lg:hover:bg-transparent
          lg:text-base
          xl:text-lg
          ${open ? "text-red-600" : ""}
        `}
      >
        <span>{name}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`
            ml-1.5
            inline
            h-4
            w-4
            transform
            transition-transform
            duration-200
            lg:group-hover:rotate-180
            ${open ? "rotate-180 text-red-600" : "rotate-0"}
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
          left-0
          mt-1
          w-full
          rounded-xl
          bg-gray-50/50
          p-1
          lg:absolute
          lg:top-full
          lg:left-1/2
          lg:-translate-x-1/2
          lg:z-50
          lg:mt-3
          lg:w-max
          lg:max-w-lg
          lg:bg-white
          lg:rounded-2xl
          lg:shadow-xl
          lg:border
          lg:border-gray-100
          lg:opacity-0
          lg:invisible
          lg:scale-95
          lg:origin-top
          lg:transition-all
          lg:duration-200
          lg:group-hover:opacity-100
          lg:group-hover:visible
          lg:group-hover:scale-100
          ${open ? "block" : "hidden lg:block"}
        `}
      >
        <div className="p-1 lg:p-3">
          <ul
            className={`grid gap-1 lg:gap-2 ${
              React.Children.count(children) <= 3
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {children}
          </ul>
        </div>
      </div>
    </li>
  );
}
