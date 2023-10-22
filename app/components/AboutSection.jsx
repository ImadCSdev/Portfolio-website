"use client"
import React, { useTransition, useState } from "react";
import Image from 'next/image'
import TabButton from "./TabButton";



const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>MysQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Sanity.io</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Next13.js</li>
          <li>Prisma</li>
          <li>DaisyUI</li>
          <li>TailwindCSS</li>

        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>  Technician Diploma  </li>
          <li>Openclassrooms Academy</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li> Node.js from Openclassrooms Academy </li>
          <li> React from Openclassrooms Academy  </li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
      };

  return (
    <section className='text-white'>

    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image src="/images/about-image.png" width={500} height={500} />
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          designing web applications. I have experience
            working with JavaScript, React, Next13.js, TypeScript, Node.js, Express, MysQl,
            MongoDb, Mongoose, Sanity, HTML, CSS, Prisma, TailwindCSS, DaisyUI , and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8"> 
          <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
    </div>

    </div>
    </section>
   )
}

export default AboutSection