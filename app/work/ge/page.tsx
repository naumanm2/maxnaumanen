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
import DataContainer from "@/app/components/data-container";

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
        <Text
          headline="About"
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[ge5]} half={true} />
        <Spacer b={false} />
        <Text
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[ge4, ge3]} />
        <Spacer b={false} />
        <DataContainer
          data={[
            { number: "32", subtitle: "lorem" },
            { number: "64", subtitle: "lorem" },
            { number: "128", subtitle: "lorem" },
          ]}
        />
        <Spacer b={false} />

        <Text
          paragraph={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
        />
        <Spacer b={false} />

        <ImageGallery images={[ge2]} />
      </div>
    </>
  );
}
