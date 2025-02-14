import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import hero from "@/public/nt/nt-hero.png";
import nt1 from "@/public/nt/nt-1.png";
import nt3 from "@/public/nt/nt-3.png";
import nt4 from "@/public/nt/nt-4.png";
import nt5 from "@/public/nt/nt-5.png";
import nt6 from "@/public/nt/nt-6.png";

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
          headline={"Nokian Tyres"}
          time={"Spring 2024"}
          tags={["ui design", "ux design"]}
          workurl="https://company.nokiantyres.com"
        />
        <Spacer b={true} />
        <Text headline="About" Content={background} />
        <Spacer b={false} />
        <Text Content={design} />
        <Spacer b={false} />
        <ImageGallery
          images={[nt3, nt4, nt5]}
          caption="An extensive, sustainable design system was built based on customer needs."
        />

        <Spacer b={false} />
        <Text Content={results} />
        <Spacer b={false} />

        <ImageGallery
          images={[nt1, nt6]}
          caption="Lorem ipsum dolor sit amet"
        />
        <Spacer b={false} />
        <Spacer b={false} />
        <Next address={"/work/valio"} text={"Valio"} />
        <Spacer b={false} />
        <Spacer b={false} />
      </div>
    </>
  );
}
