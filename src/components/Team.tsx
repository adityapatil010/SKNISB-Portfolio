import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SocialNetworksProps[];
}

interface SocialNetworksProps {
  name: string;
  url: string;
}

// Default simple profile picture URL
const defaultProfilePicture = "https://via.placeholder.com/150";

const facultyCoordinators: TeamProps[] = [
  {
    imageUrl: defaultProfilePicture,
    name: "Prof. Mayuri Agarwal",
    position: "Coordinator SKNISB",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: defaultProfilePicture,
    name: "Prof. Sheetal Kapse",
    position: "Coordinator SKNISB",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
];

const coreTeam: TeamProps[] = [
  {
    imageUrl: defaultProfilePicture,
    name: "Aditya Mane",
    position: "Chair",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: defaultProfilePicture,
    name: "Anuja",
    position: "Vice-Chair",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: defaultProfilePicture,
    name: "Nishant",
    position: "Secretary",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: defaultProfilePicture,
    name: "Aditya Patil",
    position: "Technical Head",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: defaultProfilePicture,
    name: "Sarthak",
    position: "Treasurer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  // Add more core team members as needed...
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
      default:
        return null;
    }
  };

  const renderCards = (team: TeamProps[], columns: string) => (
    <div className={`grid ${columns} gap-5 gap-y-10`}>
      {team.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
        <Card
          key={name}
          className="w-72 bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
        >
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
              src={imageUrl}
              alt={`${name} ${position}`}
              className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center mt-12">{name}</CardTitle>
            <CardDescription className="text-primary">{position}</CardDescription>
          </CardHeader>

          <CardFooter>
            {socialNetworks.map(({ name, url }: SocialNetworksProps) => (
              <div key={name}>
                <a
                  rel="noreferrer noopener"
                  href={url}
                  target="_blank"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  <span className="sr-only">{name} icon</span>
                  {socialIcon(name)}
                </a>
              </div>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  // Split core team into two rows
  const firstRowCoreTeam = coreTeam.slice(0, 2); // First 2 members
  const secondRowCoreTeam = coreTeam.slice(2);    // Remaining members

  return (
    <section id="council" className="container py-24 sm:py-32">
      {/* Main Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        SKNISB{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Council
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        The SKNISB Council is led by dedicated members who guide the branch's activities, fostering growth, leadership, and innovation.
      </p>

      {/* Faculty Coordinators */}
      <h3 className="text-xl md:text-2xl font-bold text-center mb-4 mt-10">
        Faculty Coordinators
      </h3>

      <div className="flex justify-center">
        {renderCards(facultyCoordinators, "md:grid-cols-2")}
      </div>

      {/* Core Team */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-12 mb-4">
        Core Team
      </h3>

      {/* First Row - 2 Cards */}
      <div className="flex justify-center">
        {renderCards(firstRowCoreTeam, "md:grid-cols-2")}
      </div>

      {/* Second Row - Remaining Cards */}
      <div className="flex justify-center mt-6">
        {renderCards(secondRowCoreTeam, "md:grid-cols-3")}
      </div>
    </section>
  );
};
