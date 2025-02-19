import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import primapet1 from "@/public/primapet/primapet-1.png";
import primapet2 from "@/public/primapet/primapet-2.png";
import primapet5 from "@/public/primapet/primapet-5.png";

import background from "./background.mdx";
import Next from "@/app/components/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prima Pet",
};

export default function page() {
  return (
    <>
      <div className="">
        <ImageGallery images={[primapet1]} />
        <Work
          border={false}
          headline={"Dog Food Vending Machine"}
          time={"Winter 2023"}
          tags={["development"]}
        />
        <Spacer b={true} />
        <Text headline="About" Content={background} />
        <Spacer b={false} />
        <ImageGallery images={[primapet2, primapet5]} />

        <Spacer b={false} />
        <Next address={"/work/glitcher"} text={"Glitcher"} />
        <Spacer b={false} />
      </div>
    </>
  );
}
