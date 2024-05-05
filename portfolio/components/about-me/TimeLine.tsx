import React from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  duration: string;
  location?: string;
}

export default function TimeLine({
  title,
  company,
  duration,
  location,
}: Readonly<TimelineItemProps>) {
  return (
    <ul>
      <li>
        <div className="flex justify-center space-x-10">
          <div className="text-sm">{duration}</div>
            <div>
              <p className="text-sm">{title}</p>
              <div className="flex justify-evenly m-2 items-center">
                <p>{company}</p>
                <div className="badge badge-outline">{location}</div>
              </div>
            </div>
        </div>
      </li>
    </ul>
  );
}
