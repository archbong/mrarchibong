import Image from "next/image";
import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";
import FavouriteJams from "./FavouriteJams";
import TopStack from "./TopStack";
import AboutImage from "./AboutImage";
import TimeLine from "./TimeLine";
import Education from "./Education";
import Background from "./Background";

export default function AboutInfo() {
  return (
    <div className="grid grid-cols-3">
      <div>
        <Card>
          <div>
            <div className="p-5">
              <p>
                Product Designer with 13 years of experience, focused on
                creating functional and user-centered digital products with
                visually stunning designs.
              </p>
            </div>
            <div className="flex justify-center items-center gap-10">
              <div className="flex justify-center space-x-3">
                <button>
                  <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                </button>
                <button>
                  <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                </button>
                <button>
                  <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                </button>
                <button>
                  <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                </button>
              </div>
              <div>
                <button className="btn rounded-xl h-5">Resume</button>
              </div>
            </div>
          </div>
        </Card>
       <Background />
      </div>
      <div>
        <Card classname="card h-80">
          <figure>
            <Image
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              width={500}
              height={500}
            />
          </figure>
          <div className="card-body">
            <div>
            <p className="">Hello! 👋</p>
            <p className="">My name is Samuel Archibong</p>
            <p className="">But you can call me Mr Archibong</p>
            <p className="">
              <span className="">Grab</span> my email, and get in touch ✌️
            </p>
            </div>
          </div>
        </Card>
        <Education />
        <AboutImage />
        <TopStack />
      </div>
      <div>
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
        </Card>
        <Card>
          <div>
            <Subtitle className="p-5">awards & features</Subtitle>
            <div className="p-5">
              <p>
                Product Designer with 13 years of experience, focused on
                creating functional and user-centered digital products with
                visually stunning designs.
              </p>
            </div>
          </div>
        </Card>
        <FavouriteJams />
      </div>
    </div>
  );
}
