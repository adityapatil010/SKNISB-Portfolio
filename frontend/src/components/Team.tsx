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
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const facultyCoordinators: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
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
    imageUrl: "https://i.pravatar.cc/150?img=60",
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
    imageUrl: "https://i.pravatar.cc/150?img=36",
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
    imageUrl: "https://i.pravatar.cc/150?img=17",
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
    imageUrl: "https://i.pravatar.cc/150?img=17",
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
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Sarthak",
    position: "Treasurer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  // Add more core team members as needed...
];

const domainHeads: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },{
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Aditya Patil",
    position: "Tech-Master",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
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
            <CardTitle className="text-center">{name}</CardTitle>
            <CardDescription className="text-primary">{position}</CardDescription>
          </CardHeader>

          <CardFooter>
            {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
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
  const secondRowCoreTeam = coreTeam.slice(2);    // Remaining 3 members

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
        <div className="flex gap-10">
          {renderCards(facultyCoordinators, "md:grid-cols-2")}
        </div>
      </div>

      {/* Core Team */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-12 mb-4">
        Core Team
      </h3>
      {/* First Row - 2 Cards */}
      <div className="flex justify-center">
        {renderCards(firstRowCoreTeam, "md:grid-cols-2")}
      </div>
      {/* Second Row - 3 Cards */}
      <div className="flex justify-center mt-6">
        {renderCards(secondRowCoreTeam, "md:grid-cols-3")}
      </div>

      {/* Domain Heads */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-12 mb-4">
        Domain Heads
      </h3>
      {renderCards(domainHeads, "md:grid-cols-4")}
    </section>
  );
};
