import Link from "next/link";
import Arrow from "./arrow";
import Spacer from "./spacer";

export default function Next({
  address,
  text,
}: {
  address: string;
  text: string;
}) {
  return (
    <div>
      <Spacer b={false} />
      <div className="flex flex-row items-center justify-start group">
        <div className="max-md:hidden flex-1"></div>

        <div className="pb-8"><Arrow size={48} thicness={4} /></div>
        <Link href={address} className="text-display flex-1 flex flex-col">
          <h2 className="text-left">Next</h2>
          <p className="text-secondary">{text}</p>
        </Link>
      </div>
      <Spacer b={false} />
    </div>
  );
}
