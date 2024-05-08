import Card from "../Card";
import SubHeaderText from "../typography/header/SubHeaderText";
import Subtitle from "../typography/subtitle/Subtitle";

const projects = [
  {
    id: 1,
    title: "hovincity.com",
    job: "Lead Developer",
  },
  {
    id: 2,
    title: "claire's delight",
    job: "Lead Developer"
  },
  {
    id: 3,
    title: "portfolio",
    job: "Software Engineer"
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-10">
      <div className="flex justify-center">
        <SubHeaderText>Play</SubHeaderText>
        <SubHeaderText>*</SubHeaderText>
        <SubHeaderText>Ground</SubHeaderText>
      </div>
      <div className="flex justify-between px-10 pb-20">
        <Subtitle>case studies</Subtitle>
        <Subtitle>concepts</Subtitle>
        <Subtitle>Research process</Subtitle>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center">
        {projects.map((project) => (
          <div className="p-10" key={project.id}>
            <Card
              className="size-96 relative"
              backgroundImage="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            >
              <div className="text-nigeria-earth2 font-bold flex absolute justify-between px-5 items-center inset-x-0 top-[21rem]">
                <p className="">{project.title}</p>
                <p className="uppercase font-mono">{project.job}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
