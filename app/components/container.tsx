export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 pt-16 md:p-4 min-h-full flex flex-col w-full">{children}</div>
  );
}
