import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import LinkedIn and Instagram icons
import LOGO from "../assets/LOGO.png"; // Adjust the path to your logo if necessary

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 flex justify-between items-center">
        {/* Logo Section */}
        <a rel="noreferrer noopener" href="/" className="flex items-center">
          <img
            src={LOGO} // Adjust the path if needed
            alt="SKNISB Logo"
            className="h-64 w-auto" // Set height and auto width as needed
          />
        </a>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {/* LinkedIn Icon */}
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/company/skn-ieee-student-branch/"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Instagram Icon */}
          <a
            rel="noreferrer noopener"
            href="https://www.instagram.com/sknisb?igsh=YjVhbzczb3hscnJ6"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leopoldo-miranda/" // Replace with the appropriate SKNISB profile link
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            SKNISB
          </a>
        </h3>
      </section>
    </footer>
  );
};
