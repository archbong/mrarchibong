import { HeroProps } from "@/typings";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroWithImageProps extends HeroProps {
  image: string; // Add an image prop
  children?: ReactNode;
}

export default function HeroWithImage(props: Readonly<HeroWithImageProps>) {
  return (
    <section id="hero" className="flex items-center justify-center capitalize relative w-full md:h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80" />
      <Image src={props.image} alt="Hero Image" width={0} height={0} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative container h-full flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary-foreground">
          {props.title}
        </h1>
        <p className="max-w-[600px] text-lg md:text-xl text-primary-foreground">
          {props.description}
        </p>
        {props.children && (
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {props.children}
          </div>
        )}
      </div>
    </section>
  );
}
