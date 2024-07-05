import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-muted py-6 w-full shrink-0">
        <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Samuel Archbong. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/mentor" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Mentor Me
            </Link>
            <Link href="/chat" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Gen AI
            </Link>
          </nav>
        </div>
      </footer>
    )
}