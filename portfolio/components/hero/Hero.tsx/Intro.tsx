import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="p-10">
        <p className="text-4xl px-5 pt-10 pb-5">
          Nigerian <span>Software Engineer</span>
          <br />
          dedecated to the <span>craft</span>of <br />
          creating <span>0{`->`}1</span> experiences
          <br />
          till the last <span>detail</span>.
        </p>
        <div className="flex justify-around pt-10 pb-5">
          <p>
            I&lsquo;ve helped multiple companies <br />
            deliver high-quality design.
          </p>
          <p>
            Currently a Co-founder <br />
            Software Agency at{" "}
            <Link href="https://www.primereserved.live">Prime Reserved</Link>
          </p>
        </div>
        <div>
          {`[carousel of companies I've worked for]`}
        </div>
      </div>
      <div>
        <div className="pt-10">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex space-x-4">
                <div><div className="skeleton w-24 h-24"></div></div>
                <div><div className="skeleton w-24 h-24"></div></div>
                <div><div className="skeleton w-24 h-24"></div></div>
              </div>
              <div className="mt-5">
                <div className="skeleton w-80 h-40"></div>
              </div>
            </div>
            <div className="space-y-5">
              <div><div className="skeleton w-64 h-40"></div></div>
              <div><div className="skeleton w-64 h-24"></div></div>
          </div>
          </div>
        </div>
        <div>
        <div className="flex items-center space-x-5 pt-5">
            <div><div className="skeleton w-64 h-48"></div></div>
            <div><div className="skeleton w-24 h-48"></div></div>
            <div><div className="skeleton w-48 h-48"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
