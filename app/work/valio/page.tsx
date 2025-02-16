import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import hero from "@/public/valio/valio-hero.png";
import valio1 from "@/public/valio/valio-1.png";
import valio3 from "@/public/valio/valio-3.png";
import valio4 from "@/public/valio/valio-4.png";
import valio6 from "@/public/valio/valio-6.png";

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
          headline={"Valio"}
          time={"Spring 2024"}
          tags={["ui design", "ux design"]}
          workurl="https://valio.fi"
        />
        <Spacer b={true} />
        <Text headline="About" Content={background} />
        <Spacer b={false} />
        <Text Content={design} />
        <Spacer b={false} />
        <ImageGallery
          images={[valio4, valio3, valio6]}
          caption={
            "Light design system and guidance for developer partner and valio"
          }
        />
        <Spacer b={false} />
        <Text Content={results} />
        <Spacer b={false} />
        <ImageGallery images={[valio1]} caption={""} />

        <Spacer b={false} />
        <Next address={"/work/ge"} text={"GE Healthcare"} />
        <Spacer b={false} />
      </div>
    </>
  );
}
