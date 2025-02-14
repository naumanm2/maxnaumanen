import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import hero from "@/public/ge/ge-hero.png";
import ge1 from "@/public/ge/ge-1.png";
import ge2 from "@/public/ge/ge-2.png";
import ge3 from "@/public/ge/ge-3.png";
import ge4 from "@/public/ge/ge-4.png";
import ge5 from "@/public/ge/ge-5.png";

import background from "./background.mdx";
import design from "./design.mdx";
import results from "./results.mdx";
import Next from "@/app/components/next";

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
        <Spacer b={false} />

        <Text headline="" Content={results} />
        <Spacer b={false} />

        <ImageGallery images={[ge2]} />
        
        <Spacer b={false} />
        <Next address={"/work/ge"} text={"Valio"} />
        <Spacer b={false} />
      </div>
    </>
  );
}
