import { useEffect, useState } from "react";

export default function GoTop() {
  const [active, isActive] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        isActive(true);
      } else if (isActive) {
        isActive(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {active ? (
        <div
          className="
       fixed
       bottom-0
       right-0
       z-50
       mb-4
       mr-6
       flex
       items-center
       space-x-2
       sm:space-x-4
     "
        >
          <button
            className="
    flex
    cursor-pointer
    items-center
    rounded-full
    bg-gray-300
    p-3
    text-gray-700
    ring-1 ring-gray-200
  "
            onClick={goTop}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
