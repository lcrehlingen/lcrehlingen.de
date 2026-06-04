export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="flex w-full flex-row items-center bg-transparent transition-colors duration-200 hover:bg-gray-50/80"
    >
      {children}
    </li>
  );
}
