import Link from "next/link";


export default function Hero() {

    return (
        <section className="w-full h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground font-inter">
            Welcome to My Next.js Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground font-inter">
            Showcasing my expertise in building cutting-edge web applications with Next.js
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-inter"
              prefetch={false}
            >
              View Projects
            </Link>
            <Link
              href="contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-inter"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-[url('/hero-bg.svg')] bg-cover bg-center animate-spin-slow" />
        </div>
      </section>
    )
}