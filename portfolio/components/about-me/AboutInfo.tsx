import Image from "next/image";
import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";
import FavouriteJams from "./FavouriteJams";
import TopStack from "./TopStack";
import AboutImage from "./AboutImage";
import Socials from "./Socials";
import Education from "./Education";
import Background from "./Background";
import Experience from "./Experience";

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
              <Socials />
              <div>
                <button className="btn rounded-xl h-5">Resume</button>
              </div>
            </div>
          </div>
        </Card>
       <Background />
      </div>
      <div>
        <Card className="card h-80">
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
        <Experience />
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
