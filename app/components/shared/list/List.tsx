export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex w-full flex-col gap-2 rounded-lg bg-th-background-secondary p-4">
      {children}
    </ul>
  );
}
