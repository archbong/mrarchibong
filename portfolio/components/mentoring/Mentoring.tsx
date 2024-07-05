/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6D9ORI7tpCw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Header from "../header/Header"
import { socials } from "./socials"
import { stacks } from "../skill/skills"
import Footer from "../footer/footer"
import HeroWithImage from "../landingPage/HeroWithImage"
import ProjectCollab from "../project/ProjectCollab"

export default function Mentoring() {
  return (
    <div className="flex justify-center items-center flex-col min-h-[100dvh]">
     <Header />
     <HeroWithImage
          title="Mentoring Initiatives"
          image={'https://c8.alamy.com/comp/2JGCCJR/banner-mentoring-concept-english-keywords-with-the-icon-of-goal-coaching-guidance-training-motivation-knowledge-support-and-success-2JGCCJR.jpg'}
          description={`I am committed to empowering aspiring developers through various mentoring programs and workshops. I have successfully guided numerous individuals in their journey to becoming proficient software engineers.`}
      ></HeroWithImage>
      <main className="flex-1">
        <section id="mentorship" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Mentorship</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Join My Community</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with me and other like-minded individuals to learn, grow, and collaborate.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { socials.map((social) => (
                  <Card key={social.id} className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative">
                    <Image
                      src={social.image ?? "/social.png"}
                      width={1000}
                      height={500}
                      alt={social.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <h3 className="text-2xl font-bold text-primary-foreground">{social.title}</h3>
                      <p className="text-muted-foreground">
                        {social.description}
                      </p>
                      <Link
                        href={social.link}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        prefetch={false}
                      >
                        Join Discord
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="mentorship" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tech Stack</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Web Technologies</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with me and other like-minded individuals to learn, grow, and collaborate.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { stacks.map((social) => (
                  <Card key={social.id} className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative">
                    <Image
                      src={social.image ?? "/social.png"}
                      width={600}
                      height={400}
                      alt={social.stack}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <h3 className="text-2xl font-bold text-primary-foreground">{social.stack}</h3>
                      <p className="text-muted-foreground">
                        {social.description}
                      </p>
                      <Link
                        href={social.path ?? "#"}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        prefetch={false}
                      >
                        Join Discord
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProjectCollab />
      <Footer />
    </div>
  )
}