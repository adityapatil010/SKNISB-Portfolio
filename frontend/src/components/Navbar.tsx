import { useState } from "react";
import LOGO from "../assets/LOGO.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#home", label: "Home" },
  { href: "#aboutus", label: "About Us" },
  { href: "#domain", label: "Domains" },
  { href: "#council", label: "Council" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleJoinUsClick = () => {
    setModalOpen(true);
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <div className="flex items-center">
                <img
                  src={LOGO}
                  alt="SKNISB Logo"
                  className="h-16 w-auto mr-4"
                />
                <div className="text-white text-xl font-bold">SKNISB</div>
              </div>
            </a>
          </NavigationMenuItem>

          {/* Mobile view - Mode toggle and hamburger menu */}
          <span className="flex md:hidden">
            <ModeToggle /> {/* Adding the ModeToggle here */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">SKNISB</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Join Us
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop view */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Desktop view - Join Us button and ModeToggle */}
          <div className="hidden md:flex gap-2 items-center">
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogTrigger asChild>
                <a
                  rel="noreferrer noopener"
                  href="#"
                  className={`border ${buttonVariants({ variant: "secondary" })}`}
                  onClick={handleJoinUsClick}
                >
                  Join Us
                </a>
              </DialogTrigger>
              <DialogContent
                className="fixed inset-0 flex items-center justify-center bg-opacity-50 dark:bg-opacity-80 bg-gray-900 dark:bg-gray-900 p-6 rounded-lg shadow-2xl animate-pop-in"
                style={{
                  maxWidth: "600px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="w-full">
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Join Us</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 dark:text-gray-300 text-center mb-4">
                    Fill out the form below to join us at SKNISB IEEE.
                  </DialogDescription>
                  
                  {/* Embed the Google Form using an iframe */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfQPboCw9YudVQxgzO9EGeAn40cHB0RPEcq63NZRDRTEqVEkg/viewform?embedded=true"
                    width="100%"
                    height="600px"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </DialogContent>
            </Dialog>
            <ModeToggle /> {/* Adding the ModeToggle here */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
