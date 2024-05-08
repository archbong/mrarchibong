import Socials from "../about-me/Socials";
import Logo from "../navbar/Logo";
import SubHeaderText from "../typography/header/SubHeaderText";


export default function Footer() {
  return (
    <div className="bg-nigeria-green min-h-[30rem]">
      <div className="mt-10">
        <Logo />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>© 2024 · Samuel Archibong</p>
          <p>all rights reserved</p>
        </div>
        <div>
        <Socials />
        </div>
        <div>
          <p>created with love in Nigeria</p>
          <p>cerfified ALX SE/AiCE/Founder</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-30">
        <SubHeaderText>Thank</SubHeaderText>
        <SubHeaderText>*</SubHeaderText>
        <SubHeaderText>You</SubHeaderText>
      </div>
    </div>
  )
}
