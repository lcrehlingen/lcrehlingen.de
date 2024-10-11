export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="flex w-full transform
        flex-row
        items-center
        rounded-md
        bg-gray-200
        transition
        duration-500
        ease-in-out
        hover:shadow-lg"
    >
      {children}
    </li>
  );
}
