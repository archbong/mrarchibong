import Link from "next/link";
import MenuIcon from "../icon/MenuIcon";
import { Button } from "../ui/button";
import { HeaderMenu } from "./HeaderMenu";
import { Server } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-blue-600" />
            <div>
              <span className="text-lg font-semibold text-slate-900">
                Mr Archibong
              </span>
              <span className="block text-xs text-slate-500 -mt-1">
                Backend API & Automation
              </span>
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {HeaderMenu.map((link: any) => (
            <Link
              key={link.id}
              href={link.path}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              prefetch={false}
            >
              {link.title}
            </Link>
          ))}
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            Book Consultation
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
