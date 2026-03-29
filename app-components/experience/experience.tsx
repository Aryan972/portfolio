import Image from "next/image"
import Link from "next/link"
import LanguageBox from "../language-box";
import { CircleArrowOutUpRight } from "lucide-react";
import { experience } from "@/data/resume-config";

const Experience = () => {
  return (
    <div id="experience">
        <h3 className="text-sm text-gray-500">Featured</h3>
        <h1 className="text-xl md:text-2xl font-bold">Experience</h1>
        
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 md:gap-3 mt-5 max-sm:text-sm">
              <div className="flex justify-between items-end">
                <div className="flex items-end gap-2 md:gap-3">
                  <Link className="inline-block" href={exp.companyWebsite || "#"} target="_blank">
                    {exp.companyLogo ? (
                      <Image src={exp.companyLogo} alt={exp.company} width={100} height={100} priority draggable={false} className="rounded-lg h-15 w-15 p-1 border border-dashed hover:border-primary object-contain bg-white" />
                    ) : (
                      <div className="rounded-lg h-15 w-15 p-1 border border-dashed flex items-center justify-center font-bold bg-gray-100">{exp.company.substring(0,2)}</div>
                    )}
                  </Link>
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{exp.company}</h1>
                    <p className="text-sm -mt-1 text-gray-500">{exp.position}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-gray-500">
                  <h1>{exp.startDate} - {exp.endDate}</h1>
                  <h1 className="-mt-1">{exp.location}</h1>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-1">
                  <Link href={exp.companyWebsite || "#"} target="_blank">
                    <CircleArrowOutUpRight className="size-5 md:size-6 opacity-50 hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                <div className={`border rounded-lg inner-shadow flex items-center gap-2 px-4 py-1 ${exp.status === "Working" ? "bg-green-100 border-green-500" : "bg-blue-100 border-blue-500"}`}>
                  <div className={`size-3 rounded-full ${exp.status === "Working" ? "bg-green-500" : "bg-blue-500"}`}></div>
                  <p className="text-sm text-black">{exp.status}</p>
                </div>
              </div>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm md:text-base text-gray-500">Tools & Technologies used:</span>
                  <div className="flex flex-wrap items-center">
                    <LanguageBox data={exp.technologies} />
                  </div>
                </div>
              )}
              
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mt-2 px-2 md:px-5">
                  <ul className="list-disc space-y-2 text-sm md:text-base text-gray-500">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {index < experience.length - 1 && (
              <div className="h-px w-full bg-gray-500/30 my-5"></div>
            )}
          </div>
        ))}
    </div>
  )
}

export default Experience