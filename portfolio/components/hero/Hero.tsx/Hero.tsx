import HeaderText from "@/components/typography/header/HeaderText";
import Subtitle from "@/components/typography/subtitle/Subtitle";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "linear-gradient(to bottom, #964B00, #786C3B, #452B1F)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div>
            <HeaderText>Hi there</HeaderText>
            <div className="flex justify-between items-center">
                <Subtitle>Samuel Archibong</Subtitle>
                <Subtitle>Software Engineer</Subtitle>
            </div>
            <HeaderText>I am Sam</HeaderText>
            <div className="flex justify-between items-center">
                <div>
                    <p>Based in Port Harcourt, Nigeria</p>
                    <p>1:09 AM GMT +1 25.79*C</p>
                </div>
                <div>
                    <p>Scroll</p>
                </div>
                <div>
                    <p>Freelance Availabiity</p>
                    <p><span>[]</span>Limited</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
