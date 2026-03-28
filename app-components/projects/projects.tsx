"use client";

import { AnimatePresence } from "motion/react";
import ProjectBox from "./project-box";
import { useState } from "react";
import { projects as projectsData, totalProjects } from "@/data/resume-config";

const Projects = () => {
    const [maxVisible, setMaxVisible] =  useState<number>(1);

    const handleShow = () => {
        if (maxVisible === 1) {
            setMaxVisible(totalProjects);
        } else {
            setMaxVisible(1);
        }
    }
    return (
        <div id="projects">
            <h3 className="text-sm text-gray-500">Featured</h3>
            <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold">
                    Projects
                    <span className="text-gray-500 text-sm ms-1">({totalProjects+1})</span>
                </h1>
                <h1 className='border w-fit px-4 rounded-md inner-shadow'>Currently building: <span className="text-green-500 font-semibold">Web Apps</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <AnimatePresence>
                    {projectsData.slice(0, maxVisible + 1).map((project) => (
                        <ProjectBox key={project.name} data={project} />
                    ))}
                </AnimatePresence>
            </div>
            <p
                className="inline-block text-gray-500 mt-3 md:mt-5 hover:underline cursor-pointer max-sm:text-sm"
                onClick={handleShow}
            >
                {maxVisible === 1 ? 'Show More' : 'Show Less'}
            </p>
        </div>
    )
}

export default Projects;