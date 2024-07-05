import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { ProjectProps } from "@/typings";




export default function ProjectCard({ props }: Readonly<{ props: ProjectProps}>) {

    return (
        <Card className="group overflow-hidden rounded-lg shadow-lg">
              <CardContent className="relative">
                <Image
                  src={props.image}
                  width={600}
                  height={400}
                  alt="Skill 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <h3 className="text-2xl font-bold text-primary-foreground">{ props.title }</h3>
                  <p className="text-muted-foreground">
                    Expertise in building modern, scalable, and SEO-friendly web applications with Next.js.
                  </p>
                  <Link
                    href={props.path}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
    );
    
}