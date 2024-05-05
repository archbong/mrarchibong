import Image from "next/image";
import Card from "@/components/Card";

export default function AboutImage() {
  return (
    <Card classname="h-96">
      <div className="h-96 carousel rounded-box">
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Card>
  );
}
