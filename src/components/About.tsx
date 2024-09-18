import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import LOGO from "../assets/LOGO.png"

export const About = () => {
  return (
    <section
      id="aboutus"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={LOGO}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                SKNISB
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              SKNISB (SKN IEEE Student Branch) represents the Institute of Electrical and Electronics Engineers at SKN College. At SKNISB, we offer a vibrant mix of technical workshops, exciting events, and informative seminars, ensuring a well-rounded experience that complements both academic and extracurricular pursuits. Serving as a center of innovation, SKNISB covers a wide array of domains, helping students build their careers across various fields. Our committed faculty and student council work in tandem to uphold a legacy of academic excellence and professional growth. With our international membership, SKNISB provides students with expert guidance from selecting research topics to publishing papers in renowned IEEE journals. Whether it's workshops, seminars, career placements, or technical paper presentations, SKNISB encompasses everything needed for a successful engineering journey.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
