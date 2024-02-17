import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white pt-10">
      <hr />
      <br />
      <Image
        src="./gp.png" // Replace with the actual path to your image
        alt="gp"
        width={60} // Replace with the desired width
        height={60} // Replace with the desired height
      />
      <div>
        <p className="text-white font-bold pt-3">Glen Perera</p>
        <div>
          <ul className="flex flex-row">
            <a href="https://www.instagram.com/glen.k.perera/">
              <li className="mr-2">
                <Image
                  src="./Instagram.png"
                  alt="Insta"
                  height={30}
                  width={30}
                />
              </li>
            </a>

            <li className="mr-2">
              <Image src="./Whatsapp.png" alt="Insta" height={30} width={30} />
            </li>
            <li className="mr-2">
              <Image src="./twitter.png" alt="Insta" height={30} width={30} />
            </li>
            <a href="/">
              <li>
                <Image src="./email.jpg" alt="email" height={40} width={30} />
              </li>
            </a>
          </ul>
        </div>

        <p>B.Sc(Hons) Computer Science (UG) </p>
        <p>University of Westminster (IIT Sri-Lanka)</p>

        <br />
      </div>
      <div>
        <ul className="flex flex-row justify-between ">
          <Link href="/About">
            <li className="text-[white] hover:text-[#61ea61]">About</li>
          </Link>
          <a href="#Projects">
            <li className="text-[white] hover:text-[#61ea61]">Projects</li>
          </a>
          <a href="#Contact">
            <li className="text-[white] hover:text-[#61ea61]">Contact</li>
          </a>
        </ul>
      </div>

      <div className="pt-10">
        <Link href="/" className="hover">
          <p className="text-white hover:text-[#61ea61]">Back to Home⬆️</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
