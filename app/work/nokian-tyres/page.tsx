import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import hero from "@/public/nt/nt-hero.png";
import nt1 from "@/public/nt/nt-1.png";
import nt2 from "@/public/nt/nt-2.png";
import nt3 from "@/public/nt/nt-3.png";
import nt4 from "@/public/nt/nt-4.png";
import nt5 from "@/public/nt/nt-5.png";
import nt6 from "@/public/nt/nt-6.png";
import DataContainer from "@/app/components/data-container";

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
        <Text
          headline="About"
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[nt2]} half={true} caption="lorem"/>
        <Spacer b={false} />
        <Text
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[nt4, nt3, nt6]} />
        <Spacer b={false} />
        <DataContainer
          data={[
            { number: "32", subtitle: "lorem" },
            { number: "64", subtitle: "lorem" },
            { number: "128", subtitle: "lorem" },
          ]}
        />
      </div>
    </>
  );
}
