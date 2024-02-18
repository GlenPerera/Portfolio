import Navbar from "@/app/Navbar/page";
import Footer from "../Footer/page";

const About = () => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-6 md:px-80">
        <h1 className="text-white text-3xl font-bold">About Me</h1>
        <br />
        <br />
        <p className="text-white">
          Welcome to my corner of the digital realm!. 🚀 I am a passionate and
          creative Computer Science undergraduate at the University of
          Westminster London, UK. <br />
          <br />
          As a devoted explorer of the ever-evolving landscape of technology, my
          heart beats to the rhythm of Front-End Web Development. Embarking on
          this journey, I find joy in crafting digital experiences that not only
          captivate but also leave an indelible mark on the user. With a
          penchant for elegant design and an insatiable curiosity for the latest
          web technologies, I weave together code and creativity to breathe life
          into the virtual canvas. <br />
          <br />
          As a Computer Science enthusiast, I thrive on challenges and see each
          project as an opportunity to learn, innovate, and push the boundaries
          of what&apos;s possible. My commitment to clean code and attention to
          detail ensures that every pixel has a purpose, and every interaction
          feels like a conversation between the user and the digital world.
          Beyond the screen, I am fueled by the desire to make a positive impact
          on the web landscape, embracing the ethos that technology should not
          only be powerful but also accessible and inclusive. 🌐✨
        </p>
        <br />
        <Footer />
      </div>
    </main>
  );
};

export default About;
