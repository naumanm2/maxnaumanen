import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import hero from "@/public/ge/ge-hero.png";
import ge2 from "@/public/ge/ge-2.png";
import ge3 from "@/public/ge/ge-3.png";
import ge4 from "@/public/ge/ge-4.png";

import background from "./background.mdx";
import Next from "@/app/components/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GE",
};

export default function page() {
  return (
    <>
      <div className="">
        <ImageGallery images={[hero]} />
        <Work
          border={false}
          headline={"GE Healthcare"}
          time={"Spring 2024"}
          tags={["ui design", "ux design"]}
          workurl="https://clinicalview.gehealthcare.com"
        />
        <Spacer b={true} />
        <Text headline="About" Content={background} />
        <Spacer b={false} />

        <ImageGallery images={[ge4, ge3]} />

        <ImageGallery images={[ge2]} />

        <Spacer b={false} />
        <Next address={"/work/primapet"} text={"Dog Food Vending Machine"} />
        <Spacer b={false} />
      </div>
    </>
  );
}
