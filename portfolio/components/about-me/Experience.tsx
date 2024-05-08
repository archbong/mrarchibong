import React from "react";
import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";

export default function Experience() {
  return (
    <Card>
      <Subtitle className="p-5 uppercase">experience</Subtitle>
      <ul>
        <li>
          <div className="flex justify-center space-x-10">
            <div>2021 - Now</div>
            <div>
              <div>
                <p>Co Founder Software Engineer</p>
                <div className="flex justify-evenly m-2 items-center">
                  <p>PrimeReserved</p>
                  <div className="badge badge-outline">remote</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-center">
        <h3>Companies I&#39;ve collaborated with</h3>
        <div>[carousel]</div>
      </div>
    </Card>
  );
}
