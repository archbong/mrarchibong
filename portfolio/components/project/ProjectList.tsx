/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aP3ViwWkYFq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Header from "../header/Header"
import { projects, projectLifeCycle } from "./Projects"
import { ProjectProps } from "@/typings"
import ProjectCard from "./ProjectCard"
import ProjectLifeCycleCard from "./ProjectLifeCycleCard"
import HeroWithVideo from "../landingPage/HeroWithvideo"
import { projectVideo } from "@/public/video/video"
import ProjectCollab from "./ProjectCollab"
import Footer from "../footer/footer"

export default function ProjectList() {
  return (
    <div className="flex justify-center items-center flex-col min-h-[100dvh]">
      <Header />
      <HeroWithVideo 
          title="Here are my projects"
          video={projectVideo}
          description={`Explore my latest projects, learn about my skills, and get in touch for potential collaborations.`}
          skill={'/skills'}
          contact={'/contact'}
        />
      <main className="flex-1">
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            {
              projects.map((project: ProjectProps) => (
                <ProjectCard key={project.id} props={project} />
              ))
            }
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Project Lifecycle</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">From Idea to Deployment</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how I approach and execute projects, ensuring a seamless experience from start to finish.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  projectLifeCycle.map((project) => (
                    <ProjectLifeCycleCard key={project.id} props={project} />
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        <ProjectCollab />
        <Footer />
      </main>
    </div>
  )
}


