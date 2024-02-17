"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";
import { FormEvent, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/Contact", {
        email,
        contactNumber,
        message,
      });
      console.log("Message sent sucessfully", response.data);
      setSubmitted("true");
    } catch (error) {
      console.error("Error sending message", error);
    }
  };
  return (
    <section id="Contact">
      <div>
        <hr className="border-white" />

        <p className="text-white pt-4 text-2xl font-bold">
          Let&apos; s Get Connected!!
        </p>
        <br />
        <div className="text-white flex flex-col">
          <div className="flex flex-col">
            <form action="" onSubmit={handleSubmit}>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="text-black px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>

              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="text" className="text-white">
                  Contact Number
                </Label>
                <Input
                  type="contact"
                  id="contact"
                  placeholder="Enter your Contact Number"
                  className="text-black px-4"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                <br />
              </div>

              <div className=" w-full gap-2">
                <div className="grid w-full gap-2">
                  <Label htmlFor="message-2">Enter Your Message</Label>
                  <Textarea
                    placeholder="Type your message here."
                    className="text-black"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <br />
                  <Button
                    type="submit"
                    className=" bg-green-500 hover:bg-[green] w-full"
                  >
                    Send message
                  </Button>

                  <br />
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
