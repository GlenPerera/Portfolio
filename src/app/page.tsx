import Navbar from "./Navbar/page";
import Image from "next/image";
import Link from "next/link";
import Project from "./Projects/page";
import Footer from "./Footer/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <main className="p-4">
      <Navbar />
      <div className="container mx-auto pt-4 px-6 sm:px-20 lg:px-40 xl:px-80">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <Image
              src="./gp.png"
              alt="gp"
              width={100}
              height={120}
              className="mx-auto"
            />
            <div className="text-center text-white mt-8">
              <p className="text-2xl font-bold">Hi, I&apos;m Glen Perera</p>
              <p className="mt-4">
                Full-Stack Developer, Typescript, ReactJS, NodeJS, SpringBoot, 
                NextJS, Java, PHP, MongoDB, MySQL, Machine-Learning Enthusiast.
              </p>
              <ul className="flex flex-row justify-center mt-6">
                <li className="mr-4">
                  <Link href="https://github.com/GlenPerera">
                    <Image src="/github.png" alt="git" width={40} height={40} />
                  </Link>
                </li>
                <li className="mr-4">
                  <Link href="https://Linkedin.com">
                    <Image
                      src="./linkedin.jpg"
                      alt="linkedin"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.behance.net/glenperera">
                    <Image
                      src="./behance.png"
                      alt="linkedin"
                      width={40}
                      height={40}
                      className="rounded-md bg-white"
                    />
                  </Link>
                </li>
              </ul>
              <div className="flex justify-center mt-6">
                <Link href="/About">
                  <button className="bg-white text-black rounded-xl w-40 h-10 hover:bg-green-500">
                    About me
                  </button>
                </Link>
                <Link href="/CV">
                  <button className="bg-white text-black rounded-xl w-40 h-10 ml-4 hover:bg-green-400">
                    Download CV
                  </button>
                </Link>

                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Project />
      </div>

      <div className="container mx-auto pt-4 px-6 sm:px-20 lg:px-40 xl:px-80">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
