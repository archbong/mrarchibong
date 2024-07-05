/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sTx8cwZjV6M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import MedalIcon from "@/components/icon/MedalIcon"
import StarIcon from "@/components/icon/StarIcon"
import AwardIcon from "@/components/icon/AwardIcon"
import TrophyIcon from "@/components/icon/TrophyIcon"
import GitlabIcon from "@/components/icon/GitlabIcon"
import CodepenIcon from "@/components/icon/CodepenIcon"
import Header from "@/components/header/Header"
import { stacks } from "@/components/skill/skills"
import { projects } from "@/components/project/Projects"
import HeroWithVideo from "@/components/landingPage/HeroWithvideo"
import { thunderVideo } from "@/public/video/video"
import Footer from "@/components/footer/footer"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { useState } from 'react';
import { createContact } from '@/lib/actions';
import { Report } from 'notiflix/build/notiflix-report-aio';

const contactSchema = z.object({
  name: z.string().min(8, {
    message: "Name is required" }),
  email: z.string({
    message: "Email is required" }),
  message: z.string({
    message: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Page() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormValues) => {
    setFormStatus('loading');
    const result = await createContact(data);

    if (result.success) {
      setFormStatus('success');
      Report.success(
        'A Big Thanks',
        'Your message was sent, I will get in touch asap!!',
        'close',
        {
          width: '360px',
          svgSize: '120px',
        },)
      reset();
    } else {
      setErrorMessage(result.error);
      setFormStatus('error');
    }
  };
  return (
    <>
    <Header />
      {/* <Hero /> */}
      <HeroWithVideo 
          title="Mr Archibong"
          video={thunderVideo}
          description={`Software Engineer | Both-End Developer.`}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary-foreground">
          <span className="text-2xl text-primary-background">C9</span> ALX SE
        </h1>
      </HeroWithVideo>
    <div className="flex justify-center flex-col sm:min-h-[100dvh] min-h-[100dvh]">
      <section className="w-full py-24 bg-muted">
        <div className="px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter font-inter">My Skills</h2>
            <p className="text-muted-foreground text-xl font-inter">
              As a Next.js developer, Ive honed my skills in building modern, scalable, and performant web
              applications. Here are some of the key technologies and tools Im proficient in:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {stacks.map((stack) => (
              <div key={stack.id} className="bg-background rounded-lg p-6 shadow-lg">
              <CodepenIcon className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold mt-2 font-inter">{stack.stack}</h3>
              <p className="text-muted-foreground font-inter">{stack.description}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-24">
        <div className="px-4 md:px-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter font-inter">My Projects</h2>
            <p className="text-muted-foreground text-xl font-inter">
              Check out some of the exciting web applications Ive built using Next.js and other cutting-edge
              technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="h-full w-full">
              <CardHeader>
                <CardTitle className="font-bold font-inter">{project.title}</CardTitle>
                <CardDescription className="font-bold font-inter">{project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image ?? "/logo/logo.png"}
                  alt={project.title}
                  width={6000}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex justify-between gap-5 items-center">
                  <div className="flex items-center gap-2">
                    <GitlabIcon className="w-5 h-5 text-muted-foreground" />
                    <Link href={project.github ?? "#"} className="text-muted-foreground hover:underline font-inter" prefetch={false}>
                      View on GitHub
                    </Link>
                  </div>
                  <Link
                    href={project.path ?? "#"}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-inter"
                    prefetch={false}
                  >
                    Live Demo
                  </Link>
                </div>
              </CardFooter>
            </Card>
            ))}

          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-muted">
        <div className="px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 place-content-center gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter font-inter">My Achievements</h2>
            <p className="text-muted-foreground text-xl font-inter">
              Im proud of the recognition and awards Ive received for my work as a Next.js developer. Here are some of
              my notable achievements:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <TrophyIcon className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold mt-2 font-inter">Next.js Contributor of the Year</h3>
              <p className="text-muted-foreground font-inter">
                Recognized for my contributions to the Next.js open-source project
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <AwardIcon className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold mt-2 font-inter">Best Next.js Project</h3>
              <p className="text-muted-foreground font-inter">
                Awarded for my innovative e-commerce platform built with Next.js
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <StarIcon className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold mt-2 font-inter">Top 10 Next.js Developers</h3>
              <p className="text-muted-foreground font-inter">
                Ranked among the top 10 Next.js developers in the industry
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <MedalIcon className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold mt-2 font-inter">Next.js Hackathon Winner</h3>
              <p className="text-muted-foreground font-inter">
                Won a prestigious Next.js hackathon for my innovative project
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24">
        <div className="px-4 md:px-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter font-inter">Get in Touch</h2>
            <p className="text-muted-foreground text-xl font-inter">
              Im always excited to collaborate on new projects or discuss the latest advancements in the world of
              Next.js. Feel free to reach out to me using the form below.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4">
          <div>
                <Input type="text" {...register('name')} placeholder="Name" className="font-inter" />
                {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                <Input type="email" {...register('email')} placeholder="Email" className="font-inter" />
                {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                  <Textarea placeholder="Message" {...register('message')} className="font-inter" />
                  {errors.message && <span>{errors.message.message}</span>}
                </div>
            <Textarea placeholder="Message" />
            <Button type="submit"  disabled={formStatus === 'loading'} className="w-full font-inter">
              Submit
            </Button>
            {formStatus === 'loading' && <p>Sending...</p>}
                {formStatus === 'success' && <p className='text-center'>Message sent successfully!</p>}
                {formStatus === 'error' && <p>Error: {errorMessage}</p>}
          </form>
        </div>
      </section>
    </div>
     <Footer />
    </>
  )
}









