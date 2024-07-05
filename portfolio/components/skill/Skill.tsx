/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ms8j398xD4K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Header from "../header/Header"
import { projects } from "../project/Projects"
import { stacks } from "./skills"
import HeroWithVideo from "../landingPage/HeroWithvideo"
import Footer from "../footer/footer"
import ProjectCollab from "../project/ProjectCollab"
import HeroWithImage from "../landingPage/HeroWithImage"

export default function Skills() {
  return (
      <div className="flex justify-center items-center flex-col min-h-[100dvh]">
      <Header />
      <HeroWithImage
          title="Showcasing My Web Stacks"
          image={'https://mohs10.io/wp-content/uploads/2022/05/web-technologies.png'}
          description={`Explore my latest projects, learn about my skills, and get in touch for potential collaborations.`}
      >
          <Link
            href={"/projects"}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            View Projects
          </Link>
          <Link
            href={"/contact"}
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            Get In Touch
          </Link>
      </HeroWithImage>
      <main className="flex-1">
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            { stacks.map((stack) => (
              <Card key={stack.id}  className="group overflow-hidden rounded-lg shadow-lg">
              <CardContent className="relative">
                <Image
                  src={stack.image ?? "/logo/image.png"}
                  width={1000}
                  height={1000}
                  alt={stack.stack}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <h3 className="text-2xl font-bold text-primary-foreground">{stack.stack}</h3>
                  <p className="text-muted-foreground">
                    {stack.description}
                  </p>
                  <Link
                    href={stack.path ?? "#"}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            {
              projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden rounded-lg shadow-lg">
                <CardContent className="relative">
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <h3 className="text-2xl font-bold text-primary-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <Link
                      href={project.path}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              ))
            }
          </div>
        </section>
        <ProjectCollab />
      </main>
      <Footer />
    </div>
  )
}