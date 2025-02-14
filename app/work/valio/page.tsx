import ImageGallery from "@/app/components/image-gallery";
import Spacer from "@/app/components/spacer";
import Work from "@/app/components/work";
import Text from "@/app/components/text";

import hero from "@/public/valio/valio-hero.png";
import valio1 from "@/public/valio/valio-1.png";
import valio2 from "@/public/valio/valio-2.png";
import valio3 from "@/public/valio/valio-3.png";
import valio4 from "@/public/valio/valio-4.png";
import valio5 from "@/public/valio/valio-5.png";
import valio6 from "@/public/valio/valio-6.png";
import DataContainer from "@/app/components/data-container";

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
        <Text
          headline="About"
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[valio5]} half={true} />
        <Spacer b={false} />
        <Text
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[valio4, valio3, valio6]} />
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
