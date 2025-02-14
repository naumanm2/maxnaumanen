import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import glitcher1 from "@/public/glitcher/glitcher-1.png";
import glitcher2 from "@/public/glitcher/glitcher-2.png";
import glitcher3 from "@/public/glitcher/glitcher-3.png";
import glitcher4 from "@/public/glitcher/glitcher-4.png";
import DataContainer from "@/app/components/data-container";

import background from "./background.mdx";
import design from "./design.mdx";
import results from "./results.mdx";
import Next from "@/app/components/next";

export default function page() {
  return (
    <>
      <div className="">
        <ImageGallery images={[glitcher1]} />
        <Work
          border={false}
          headline={"Glitcher"}
          time={"2025"}
          tags={["ui design", "development"]}
          workurl="https://glitcher.info"
        />
        <Spacer b={true} />
        <Text headline="About" Content={background} />
        <Spacer b={false} />
        <ImageGallery images={[glitcher2]} />

        <Spacer b={false} />
        <Next address={"/work/ge"} text={"glitcher"} />
        <Spacer b={false} />
      </div>
    </>
  );
}
