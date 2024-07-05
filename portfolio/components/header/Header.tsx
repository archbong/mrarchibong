import Link from "next/link";
import MenuIcon from "../icon/MenuIcon";
import MountainIcon from "../icon/MountainIcon";
import { Button } from "../ui/button";
import { HeaderMenu } from "./HeaderMenu";

export default function Header() {

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Mr Archbong</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {
                HeaderMenu.map((link: any) => (
                  <Link key={link.id} href={link.path} className="text-md font-medium hover:underline underline-offset-4 hover:text-secondary-foreground" prefetch={false}>
                    {link.title}
                 </Link>
                ))
            }
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
    );
}