import { LogoIcon } from "./Icons";
import LOGO from "../assets/LOGO.png";
import { FaGithub, FaTwitter, FaDribbble, FaYoutube, FaDiscord, FaTwitch } from 'react-icons/fa'; // Importing social media icons

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 flex justify-between items-center">
        <a
          rel="noreferrer noopener"
          href="/"
          className="flex items-center"
        >
          <img
            src={LOGO} // Adjust the path if needed
            alt="SKNISB Logo"
            className="h-64 w-auto" // Set height and auto width as needed
          />
        </a>
        
        <div className="flex gap-4">
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            <FaGithub size={24} />
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            <FaTwitter size={24} />
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            <FaDribbble size={24} />
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            <FaYoutube size={24} />
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            <FaDiscord size={24} />
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            <FaTwitch size={24} />
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            SKNISB
          </a>
        </h3>
      </section>
    </footer>
  );
};
