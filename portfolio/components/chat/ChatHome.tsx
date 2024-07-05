/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zARe1ycaEkx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "../header/Header"
import HeroWithImage from "../landingPage/HeroWithImage"
import Footer from "../footer/footer"
import ProjectCollab from "../project/ProjectCollab"

export default function ChatHome() {
  return (
    <div className="flex items-center flex-col min-h-[100dvh]">
      <Header />
      <HeroWithImage
        title="Unleash the Power of Generative AI"
        image="/"
        description="Discover the latest advancements in generative AI and how they can transform your business."
      >
        <Button size="lg">
          <Link href="/chat-ai">
          Get Started</Link>
        </Button>
        <Button variant="secondary" size="lg">
          <Link href="https://sdk.vercel.ai/docs/getting-started/nextjs-app-router">
            Learn More
          </Link>
        </Button>
      </HeroWithImage>
      <main className="flex-1">
        <section id="features" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Unlock the Potential of Generative AI
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the cutting-edge capabilities of our generative AI platform.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Natural Language Generation</h3>
                      <p className="text-muted-foreground">
                        Generate human-like text for a variety of use cases, from content creation to customer service.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Image Generation</h3>
                      <p className="text-muted-foreground">
                        Create unique and visually stunning images from textual descriptions.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Code Generation</h3>
                      <p className="text-muted-foreground">
                        Automatically generate code snippets and entire applications based on natural language prompts.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="demos" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Demos</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Experience the Power of Generative AI
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our interactive demos to see our generative AI in action.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Text Generation</h3>
                      <p className="text-muted-foreground">Generate engaging and coherent text on any topic.</p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Try Demo</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Image Generation</h3>
                      <p className="text-muted-foreground">Create unique and visually stunning images from text.</p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Try Demo</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Code Generation</h3>
                      <p className="text-muted-foreground">
                        Automatically generate code based on natural language prompts.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Try Demo</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Revolutionizing the Future with Generative AI
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about our mission and the team behind our cutting-edge generative AI technology.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To empower businesses and individuals with the transformative power of generative AI.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Our Team</h3>
                      <p className="text-muted-foreground">
                        Meet the talented individuals behind our cutting-edge generative AI technology.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Meet the Team</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">Our Technology</h3>
                      <p className="text-muted-foreground">
                        Discover the cutting-edge AI models and algorithms that power our generative AI platform.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
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