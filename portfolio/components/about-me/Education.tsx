import React from "react";
import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";
import TimeLine from "./TimeLine";

export default function Education() {
  return (
    <Card>
      <Subtitle className="p-5 uppercase">education</Subtitle>
      <TimeLine
        duration="2016"
        title="Business Administration and Management"
        company="Ken Polytechnic"
        location="Rivers"
      />
    </Card>
  );
}
