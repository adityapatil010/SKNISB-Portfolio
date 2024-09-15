import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import TechnicalGif from '../assets/Domains/programmer.gif'; // Adjust the path if needed
import DocumentationGif from '../assets/Domains/agreement.gif'; // Adjust the path if needed
import HumanitarianGif from '../assets/Domains/humanitarian.gif'; // Adjust the path if needed
import MembershipDevelopmentGif from '../assets/Domains/task.gif'; // Adjust the path if needed
import WomenInEngineeringGif from '../assets/Domains/work.gif'; // Adjust the path if needed
import contentanddesignGif from '../assets/Domains/layout.gif'; // Adjust the path if needed


interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
const features: FeatureProps[] = [
  {
    icon: <img src={TechnicalGif} alt="Technical" className="h-24 w-24 rounded-full" />, // Adjust size as needed
    title: "Technical",
    description:
      "In the technical domain, students explore website, application, and backend development, honing skills in these areas through workshops, projects, and networking opportunities.",
  },
  {
    icon: <img src={DocumentationGif} alt="Documentation" className="h-24 w-24 rounded-full" />, // Adjust size as needed
    title: "Documentation",
    description:
      "The documentation domain focuses on creating and managing records, reports, and documentation related to technical projects, events, and activities.",
  },
  {
    icon: <img src={contentanddesignGif} alt="Women in Engineering" className="h-24 w-24 rounded-full" />, // Adjust size as needed
    title: "Content and Design",
    description:
      "The Content and Design domain focuses on creating visual and written content for club activities, publications, and events.",
  },
  {
    icon: <img src={HumanitarianGif} alt="Humanitarian" className="h-24 w-24 rounded-full" />, // Adjust size as needed
    title: "Humanitarian",
    description:
      "The humanitarian domain is dedicated to using technology for social good, including projects and initiatives to address societal challenges and improve people’s lives.",
  },
  {
    icon: <img src={MembershipDevelopmentGif} alt="Membership Development" className="h-24 w-24 rounded-full" />, // Adjust size as needed
    title: "Membership Development",
    description:
      "The Membership domain is responsible for managing and expanding the club's member base and fostering a sense of community among its members.",
  },
  {
    icon: <img src={WomenInEngineeringGif} alt="Membership Development" className="h-24 w-24 rounded-full" />, // Adjust size as needed
    title: "Women in Engineering",
    description:
      "The Women in Engineering domain aims to support and empower female students pursuing engineering careers, fostering gender diversity and inclusion in the field.",
  }
 
  
];



export const HowItWorks = () => {
  return (
    <section
      id="domain"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Domains{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      SKNISB offers a diverse range of technical and non-technical domains, fostering innovation and growth in multiple fields.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-3 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
