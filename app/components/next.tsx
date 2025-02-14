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
      <div className="flex flex-row justify-between items-center">
        <div className="max-md:hidden flex-1"></div>
        <Link
          href={address}
          className="text-display group flex-1 flex flex-row items-center"
        >
          <h2 className="text-left">
            Next
          </h2>
          <Arrow size={64} thicness={5} />
        </Link>
      </div>
      <Spacer b={false} />
    </div>
  );
}
