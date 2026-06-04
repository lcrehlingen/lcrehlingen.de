export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex w-full flex-col divide-y divide-gray-100 rounded-2xl bg-white border border-gray-100 shadow-sm p-2 overflow-hidden">
      {children}
    </ul>
  );
}
