import Image from "next/image";
import { ProjectProps } from "@/typings";
import { Card, CardContent } from "../ui/card";

export default function ProjectLifeCycleCard({
  props,
}: Readonly<{ props: ProjectProps }>) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-lg">
      <CardContent className="relative">
        <Image
          src={props.image}
          width={600}
          height={400}
          alt="Project Lifecycle Step 1"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary-foreground">
            {props.title}
          </h3>
          <p className="text-muted-foreground">{props.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
