import { load } from 'js-yaml';
import fs from 'fs';
import ProjectCard from "@/components/content/project_card";
import ProjectCardIcons from "@/components/content/project_card_icons";

export default function BGContent() {
    const objects:ProjectCard[] = load(fs.readFileSync('./projects.yaml', 'utf8')) as ProjectCard[];

    return (
        <div className="flex flex-col items-center bg-transparent pt-40 m-2 text-[#0B1121] dark:text-[#F8FAFC]">
            <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
            <ul className="space-y-5 max-w-xl">
                {objects.map((object, index) => (
                    <li
                        key={index}
                        className="bg-[#F8FAFC] dark:bg-[#0B1121] shadow-md shadow-[#48EDFF] dark:shadow-[#87ACFD] rounded-xl grid grid-cols-5 gap-4 p-3"
                    >
                        {/* First section - link to YouTube video */}
                        <iframe
                            className="w-full h-full col-span-2"
                            src={object.videoLink}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                        {/* Second section - project details */}
                        <div className="col-span-2">
                            <div className="mb-2 text-3xl font-bold">{object.projectName}</div>
                            <div className="mb-2 text-lg text-gray-700/80 dark:text-gray-100/70">{object.projectDescription}</div>
                            <div className="grid grid-cols-4 gap-3">
                                {object.projectSkills.map((skill, tagIndex) => (
                                    <span key={tagIndex} className="bg-gray-500/20 dark:bg-gray-500/50 rounded px-2 py-1 text-xs text-center">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Third section - icons */}
                        <ProjectCardIcons repoLink={object.repoLink} liveLink={object.liveLink} isLive={object.isLive} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
