export default function Title({ name }: { name: string }) {
  return (
    <h1 className="w-full py-2 text-center text-4xl font-bold leading-tight md:text-5xl">
      {name}
    </h1>
  );
}
