"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
 import ProjectTag from "./ProjectTag";
 import { motion, useInView } from "framer-motion";



const projectsData = [
    {
      id: 1,
      title: "CHAT App",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ImadCSdev/Chat-App",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Social Media App ",
      description: "Project 2 description",
      image: "/images/projects/2.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ImadCSdev/project1",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Website",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ImadCSdev/Website",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Backend Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ImadCSdev/Rest-Api",
      previewUrl: "/",
    },
    // {
    //   id: 5,
    //   title: "Ecommerce with Prisma ",
    //   description: "Project 5 description",
    //   image: "/images/projects/4.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
     // {
    //   id: 5,
    //   title: "Portfolio",
    //   description: "Project 6 description",
    //   image: "/images/projects/4.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
     // {
    //   id: 5,
    //   title: "portfolio with sanity",
    //   description: "Project 7 description",
    //   image: "/images/projects/4.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
     // {
    //   id: 5,
    //   title: "Blog",
    //   description: "Project 8 description",
    //   image: "/images/projects/4.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
     // {
    //   id: 5,
    //   title: "Booking App",
    //   description: "Project 9 description",
    //   image: "/images/projects/4.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },

  ];


const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" >
   <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
  My Projects
</h2> 
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
         <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
    </div>
<ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'> 
  {filteredProjects.map ((project,index)=> (
           <motion.li
            key={index}
           variants={cardVariants}
           initial="initial"
           animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
           >
             
       <ProjectCard
       key={project.id}
       
       title={project.title}
       description={project.description}
       imgUrl={project.image}
       tag={project}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
     /> 
     </motion.li>
  )) } 
 
</ul>

 </section>    

     
  )
}

export default ProjectsSection