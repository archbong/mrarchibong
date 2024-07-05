/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cpbeUtZuTPU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BellIcon, PiIcon, TypeIcon } from "lucide-react";
import CodepenIcon from "../icon/CodepenIcon";
import Header from "../header/Header";
import Footer from "../footer/footer";

export default function Component() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const generateText = () => {
    const generatedText = `This is a generated text response based on the prompt: "${prompt}". The generative AI model has produced this coherent and engaging text.`;
    setResponse(generatedText);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6">
        <div className="max-w-2xl w-full space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Generate Engaging Text
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enter a prompt and let our generative AI model create engaging and
              coherent text for you.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center justify-center rounded-lg bg-accent bg-opacity-80 text-accent-foreground p-4 hover:bg-accent/80 transition-colors shadow-lg"
                prefetch={false}
              >
                <CodepenIcon className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">Next.js</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center rounded-lg bg-accent bg-opacity-80 text-accent-foreground p-4 hover:bg-accent/80 transition-colors shadow-lg"
                prefetch={false}
              >
                <BellIcon className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">Vercel</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center rounded-lg bg-accent bg-opacity-80 text-accent-foreground p-4 hover:bg-accent/80 transition-colors shadow-lg"
                prefetch={false}
              >
                <PiIcon className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">Python</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center rounded-lg bg-accent bg-opacity-80 text-accent-foreground p-4 hover:bg-accent/80 transition-colors shadow-lg"
                prefetch={false}
              >
                <TypeIcon className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">TypeScript</span>
              </Link>
            </div>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt..."
              className="p-4 rounded-lg border border-input shadow-lg"
              rows={4}
            />
            <Button onClick={generateText} size="lg">
              Generate Text
            </Button>
          </div>
          {response && (
            <div className="prose text-muted-foreground">
              <p>{response}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
