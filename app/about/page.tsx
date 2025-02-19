import { Metadata } from "next";
import About from "../components/about";
import Spacer from "../components/spacer";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="pt-40 md:pt-60 pb-2 flex-1 overflow-x-hidden">
      <h1 className="pb-6 md:pb-10">Experience</h1>
      <About
        headline={"TBWA\\\Helsinki"}
        time={"2021–"}
        tags={["UX/UI Design", "Development"]}
        border={true}
        paragraph={
          "Currently, I work at TBWA\\\Helsinki as a Digital Designer. Have experienced responsibility in projects from startups to largest companies and brands inside and outside of Finland"
        }
      />
      <About
        headline={"Aalto University"}
        time={"2017–"}
        tags={["Information networks"]}
        border={true}
        paragraph={
          "Bachelor of Science, graduated with honors in 2020. Currently working on my masters in Digital and Social Media. GPA 4.48"
        }
      />
      <Spacer b={false} />
    </div>
  );
}
