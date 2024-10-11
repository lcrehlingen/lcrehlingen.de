import type { ReactNode } from "react";

export default function TableContainer({
  left,
  right,
  reverseLeft = false,
  reverseRight = false,
}: {
  left: ReactNode;
  right: ReactNode;
  reverseLeft?: boolean;
  reverseRight?: boolean;
}) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          className={
            reverseLeft
              ? "row-start-1 md:col-start-2 md:row-start-1"
              : undefined
          }
        >
          {left}
        </div>
        <div
          className={
            reverseRight
              ? "row-start-1 md:col-start-2 md:row-start-1"
              : undefined
          }
        >
          {right}
        </div>
      </div>
    </section>
  );
}
