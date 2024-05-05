import React from "react";
import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";

export default function TopStack() {
  return (
    <Card>
      <div>
        <Subtitle className="p-5">Top Stack</Subtitle>
        <div className="p-3 grid grid-cols-7 gap-x-2 gap-y-3 justify-center items-center">
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
        </div>
      </div>
    </Card>
  );
}
