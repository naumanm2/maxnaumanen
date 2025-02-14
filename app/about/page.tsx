import About from "../components/about";
import Spacer from "../components/spacer";

export default function AboutPage() {
  return (
    <div className="pt-40 md:pt-60 flex-1">
      <h1 className="pb-2">Experience</h1>
      <About
        headline={"TBWAHelsinki"}
        time={"2021–"}
        tags={["UI Designer"]}
        border={true}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <About
        headline={"Aalto University"}
        time={"2017–"}
        tags={["Information networks"]}
        border={true}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <Spacer b={false} />
    </div>
  );
}
