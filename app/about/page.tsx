import About from "../components/about";
import Spacer from "../components/spacer";

export default function AboutPage() {
  return (
    <div className="pt-40 md:pt-60 flex-1">
      <h1 className="pb-2">Experience</h1>
      <About
        headline={"TBWAHelsinki"}
        time={"2021–"}
        tags={["UI Design", "Development"]}
        border={true}
        paragraph={
          "Currently, I work at TBWA\Helsinki as a Digital Designer. Have experience working in projects varying from startups to companies with revenue over 100M. I'm the only one in my role at TBWA, and I feel blessed to have had the opportunity to take on more responsibility than usual. Main responsibilities include UI/UX design, display banner production, some animation and various development tasks."
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
