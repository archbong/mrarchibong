"use client"

import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
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

export default function ProjectCollab() {

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
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Let&apos;s Collaborate
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m always excited to discuss new projects and explore
            potential collaborations. Feel free to reach out, and let&apos;s
            bring your ideas to life.
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
        <div className="relative md:order-last lg:-order-first">
          <Image
            src="/sam-removebg-preview.png"
            width={600}
            height={600}
            alt="Contact"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
