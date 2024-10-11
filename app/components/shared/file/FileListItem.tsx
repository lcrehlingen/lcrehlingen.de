export default function FileListeItem({
  name,
  to,
}: {
  name: string;
  to: string;
}) {
  return (
    <li className="flex items-center justify-between p-3">
      <div className="flex w-0 flex-1 items-center">
        <svg
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
            clipRule="evenodd"
          />
        </svg>

        <span className="ml-2 w-0 flex-1 truncate">{name}</span>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          <svg
            className="h-5 w-5 flex-shrink-0 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            fill="currentColor"
            xmlSpace="preserve"
            aria-hidden="true"
          >
            <path d="M48.5 31h-3c-.8 0-1.5.7-1.5 1.5v10c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-10c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V46c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V32.5c0-.8-.7-1.5-1.5-1.5z" />
            <path d="M25 37.6c.6.6 1.5.6 2.1 0l13.5-13.5c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0l-5.6 5.6c-.6.6-1.7.2-1.7-.7V3.5C29 2.7 28.2 2 27.5 2h-3c-.8 0-1.5.7-1.5 1.5v21.2c0 .9-1.1 1.3-1.7.7l-5.6-5.6c-.6-.6-1.5-.6-2.1 0L11.5 22c-.6.6-.6 1.5 0 2.1L25 37.6z" />
          </svg>
        </a>
      </div>
    </li>
  );
}
