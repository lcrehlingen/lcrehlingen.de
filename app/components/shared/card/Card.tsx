interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg  border-b-4 border-b-red-500 bg-white shadow-lg">
      {children}
    </div>
  );
}
