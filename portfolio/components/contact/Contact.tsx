/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Yk5pHAFeFD7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Header from "../header/Header"
import HeroWithImage from "../landingPage/HeroWithImage"
import { projects } from "../project/Projects"
import ProjectCollab from "../project/ProjectCollab"
import Footer from "../footer/footer"
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

export default function Contact() {

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
    <div className="flex items-center flex-col min-h-[100dvh]">
      <Header />
      <HeroWithImage 
          title="I build, maintain, and scale Web Products"
          image="https://t4.ftcdn.net/jpg/05/04/78/25/360_F_504782581_LHwsDbXlrFiiadWC4i15yV2lhbJnB8g0.jpg"
          description={`Explore my latest projects, learn about my skills, and get in touch for potential collaborations.`}
        
      />
      <main className="flex-1">
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden rounded-lg shadow-lg">
              <CardContent className="relative">
                <Image
                  src={project.image ?? "/placehoder.png"}
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <h3 className="text-2xl font-bold text-primary-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">
                   {project.description}
                  </p>
                  <Link
                    href={project.path ?? "#"}
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
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Passionate Software Engineer</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m a software engineer with a passion for building innovative and user-friendly web applications. With
                expertise in Next.js, React, and modern web development technologies, I strive to create solutions that
                push the boundaries of what&apos;s possible on the web.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Get in Touch
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/sam-removebg-preview.png"
                width={600}
                height={600}
                alt="About"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 rounded-lg" />
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Let&apos;s Collaborate</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m always excited to discuss new projects and explore potential collaborations. Feel free to reach out,
                and let&apos;s bring your ideas to life.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
                <div>
                <Input type="text" {...register('name')} placeholder="Name" className="w-full" />
                {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                <Input type="email" placeholder="Email" {...register('email')} className="w-full" />
                {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                  <Textarea placeholder="Message" {...register('message')} className="w-full" />
                  {errors.message && <span>{errors.message.message}</span>}
                </div>
                <Button type="submit" disabled={formStatus === 'loading'} className="w-full">
                  Submit
                </Button>
                {formStatus === 'loading' && <p>Sending...</p>}
                {formStatus === 'success' && <p className='text-center'>Message sent successfully!</p>}
                {formStatus === 'error' && <p>Error: {errorMessage}</p>}
              </form>
            </div>
            <div className="relative">
              <Image
                src="/IMG_0611.jpg"
                width={600}
                height={600}
                alt="Contact"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 rounded-lg" />
            </div>
          </div>
        </section>
      </main>
     <Footer />
    </div>
  )
}