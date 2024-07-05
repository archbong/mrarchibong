/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fj7XIzjBGYq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Footer from "../footer/footer";
import ProjectCollab from "../project/ProjectCollab";
import Image from "next/image";
import Header from "../header/Header";

export default function ComingSoon() {
  return (
    <>
      <Header />

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground overflow-hidden">
        <div className="px-4 md:px-6 text-primary-foreground">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] place-content-center">
            <div className="flex flex-col justify-center  space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pretty py-2">
                  Coming Soon
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Our latest product is on the way! Sign up to be the first to
                  know when it launches.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <div className="flex gap-2">
                  <div className="bg-primary-foreground/20 rounded-md px-4 py-2 text-center">
                    <div className="text-4xl font-bold">07</div>
                    <div className="text-sm">Days</div>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-md px-4 py-2 text-center">
                    <div className="text-4xl font-bold">12</div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-md px-4 py-2 text-center">
                    <div className="text-4xl font-bold">45</div>
                    <div className="text-sm">Mins</div>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-md px-4 py-2 text-center">
                    <div className="text-4xl font-bold">23</div>
                    <div className="text-sm">Secs</div>
                  </div>
                </div>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Join Waitlist</Button>
                </form>
              </div>
            </div>
            <Image
              src="https://cdn3.iconfinder.com/data/icons/business-and-marketing-3d-illustration/512/Business_Strategy.png"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <div className="flex items-center flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Feedback
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Share Your Thoughts
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re eager to hear your suggestions and feedback about
                  our upcoming product. Let us know what you&apos;re excited
                  about or what you&apos;d like to see.
                </p>
                <form className="flex flex-col gap-4 max-w-md mx-auto">
                  <Textarea
                    placeholder="Share your thoughts..."
                    className="p-4 min-h-[150px]"
                  />
                  <Button type="submit">Submit Feedback</Button>
                </form>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Free Tutorials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Learn Web Development
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our free video tutorials and courses to help you
                  learn web development skills. From beginner to advanced,
                  we&apos;ve got you covered.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Introduction to HTML</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Learn the basics of HTML and how to structure web pages.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Watch Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>CSS Fundamentals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Master the art of styling your web pages with CSS.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Watch Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>JavaScript for Beginners</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Get started with JavaScript and learn to add
                        interactivity to your sites.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Watch Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>React.js Crash Course</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Dive into the world of React.js and build modern web
                        applications.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Watch Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced CSS Techniques</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Explore advanced CSS concepts and techniques to take
                        your styling to the next level.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Watch Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Mastering JavaScript Async</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Learn to handle asynchronous code in JavaScript and
                        build responsive web applications.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">Watch Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with
                  our products and services.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug">
                        &ldquo;The customer service I received was exceptional.
                        The support team went above and beyond to address my
                        concerns.&rdquo;
                      </blockquote>
                      <div className="mt-4">
                        <div className="font-semibold">Jules Winnfield</div>
                        <div className="text-sm text-muted-foreground">
                          CEO, Acme Inc
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug">
                        &ldquo;I was hesitant at first, but your product
                        exceeded my expectations. It&apos;s been a game-changer
                        for my business.&rdquo;
                      </blockquote>
                      <div className="mt-4">
                        <div className="font-semibold">Mia Khalifa</div>
                        <div className="text-sm text-muted-foreground">
                          Founder, Startup X
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug">
                        &ldquo;I&apos;m amazed by the level of detail and care
                        put into this product. It&apos;s truly a work of
                        art.&rdquo;
                      </blockquote>
                      <div className="mt-4">
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-muted-foreground">
                          Designer, Creative Agency
                        </div>
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
    </>
  );
}
