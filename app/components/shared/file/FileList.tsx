import type { ReactNode } from "react";

export default function FileList({ children }: { children: ReactNode }) {
  return (
    <ul
      className="
          w-full divide-y
          divide-gray-200
          rounded-md border
          border-gray-200
          lg:w-1/4
        "
    >
      {children}
    </ul>
  );
}
