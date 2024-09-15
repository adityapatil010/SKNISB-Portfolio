import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LOGO_BG from "../assets/LOGO_BG.png"
import IEEE from "../assets/IEEE.png"

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      {/* <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src={IEEE}
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe React</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>This landing page is awesome!</CardContent>
      </Card> */}

      {/* Team */}
      <Card className="absolute right-[20px] top-2 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={LOGO_BG}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">SKNISB</CardTitle>
          <CardDescription className="font-normal text-primary">
            SKN IEEE Student Branch
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
          Connect with Us for Insights, Innovation, and Impact in Technology!          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      <Card className="relative top-[10px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
  <CardHeader className="relative flex flex-col items-center">
    <CardTitle className="flex items-center justify-between w-full">
      IEEE
    </CardTitle>

    {/* Logo Image Centered and Fit */}
    <div className="relative w-24 h-24 mt-4 mb-4">
      <img
        src={IEEE}
        alt="user avatar"
        className="max-w-full max-h-full object-contain rounded-md"
      />
    </div>

    <CardDescription className="text-center px-4">
    The Institute of Electrical and Electronics Engineers (IEEE) is a professional association for electronic engineering and electrical engineering (and associated disciplines) with its corporate office in New York City and its operations center in Piscataway, New Jersey.
    </CardDescription>
  </CardHeader>




  
</Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
    <div className="w-full p-4">
      <h2 className="text-lg font-semibold mb-2">Get Your Membership</h2>
      <form>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="w-full bg-primary text-white p-2 rounded">Subscribe</button>
      </form>
    </div>
  </CardHeader>
</Card>
    </div>
  );
};
