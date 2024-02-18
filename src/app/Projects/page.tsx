import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = () => {
  const names = [
    {
      Title: "Online Shopping System",
      Description:
        "A system developed to the user to buy items such that the manager of the company can add the items to the system.",
      Language: "Done by using Java, Java Swing",
      Link: "https://github.com/jumangl/Online-Shopping-System",
    },
    {
      Title: "Online House Rental Sytem",
      Description:
        "A system developed to the customer to search properties available for sale, add to favourites and remove from favourites and advanced search using react tabs.",
      Language: "Done by using React",
      Link: "https://github.com/jumangl/Rightmove-House-for-Sale",
    },
    {
      Title: "Online Drum Player",
      Description:
        "An online drum which can be played by using the relavant keys of the keyboard",
      Language: "Done by using Vanilla Javascript",
      Link: "https://github.com/jumangl/Drum_Challenge",
    },
    {
      Title: "Dremap Personalized Learning (Group Project)",
      Description: "Still project in progress...",
      Language:
        "Front-End: Nextjs\n, Back-End: Nestjs\n, Data Science Component: Python",
      Link: "https://github.com/SDGP-CS-64-DreMap",
    },
    {
      Title: "HirelyAI",
      Description: "Still project in progress...",
      Language:
        "Front-End: Reactjs\n, Back-End: Nodejs\n, Machine Learning Component: Python",
      Link: "",
    },
    {
      Title: "Personal Portfolio",
      Description: "Live on Vercel",
      Language: "Front-End: Nextjs\n, Back-End: Nestjs\n, Design: Figma",
      Link: "glendev.vercel.app",
    },
  ];
  return (
    <section id="Projects">
      <main>
        <div className="container mx-auto pt-4 px-6 sm:px-20 lg:px-40 xl:px-80">
          <hr className="bg-white" />
          <br />
          <p className="text-white font-bold text-xl">Projects</p>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {names.map((project) => (
              <Card key={project.Title} className="max-w-xs">
                <CardHeader>
                  <CardTitle>{project.Title}</CardTitle>
                  <CardDescription>{project.Description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.Language}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg: bg-green-500 hover:bg-[green]">
                    <Link href={project.Link}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <br />
        </div>
      </main>
    </section>
  );
};

export default projects;
