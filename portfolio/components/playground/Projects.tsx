import Card from "../Card";
import SubHeaderText from "../typography/header/SubHeaderText";
import Subtitle from "../typography/subtitle/Subtitle";

export default function Projects(){

    return (
        <div className="min-h-screen">
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
            <div>
                <Card />
            </div>
        </div>
    );
}