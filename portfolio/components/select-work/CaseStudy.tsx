import SubHeaderText from "../typography/header/SubHeaderText";
import Subtitle from "../typography/subtitle/Subtitle";
import CaseCard from "./CaseCard";


export default function CaseStudy() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
      <SubHeaderText>Select</SubHeaderText>
      <SubHeaderText>*</SubHeaderText>
      <SubHeaderText>Work</SubHeaderText>
      </div>
      <div className="flex justify-between px-10 pb-20">
        <Subtitle>case studies</Subtitle>
        <Subtitle>Research process</Subtitle>
      </div>
      <CaseCard />
    </div>
  )
}
