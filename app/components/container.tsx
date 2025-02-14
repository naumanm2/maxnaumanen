export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 md:p-4 h-full flex flex-col w-full">{children}</div>
  );
}
