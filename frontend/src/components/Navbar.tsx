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
import { LogoIcon } from "./Icons";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog"; // Import Dialog components

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
  const [modalOpen, setModalOpen] = useState<boolean>(false); // State to control the modal

  const handleJoinUsClick = () => {
    setModalOpen(true); // Open the modal when the button is clicked
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
                  src={LOGO} // Adjust the path if needed
                  alt="SKNISB Logo"
                  className="h-16 w-auto mr-4" // Set height, auto width, and margin as needed
                />
                <div className="text-white text-xl font-bold">SKNISB</div>
              </div>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

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

          {/* desktop */}
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

          <div className="hidden md:flex gap-2">
            {/* Join Us button triggers the modal */}
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
                  maxWidth: "500px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="flex flex-col items-center w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Join Us</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 dark:text-gray-300 text-center mb-4">
                    Enter Details to Get Membership for IEEE at SKNISB
                  </DialogDescription>
                  <form className="space-y-4 w-full">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border p-2 rounded w-full"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border p-2 rounded w-full"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded shadow-lg"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
