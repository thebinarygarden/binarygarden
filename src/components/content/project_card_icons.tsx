"use client"
import Image from 'next/image'
import {useTheme} from "next-themes";
import dynamic from "next/dynamic";

const ProjectCardIcons = ({repoLink, liveLink, isLive}: {
    repoLink: string;
    liveLink: string;
    isLive: boolean;
}) => {
    const { theme } = useTheme();
    const liveSvg = isLive ? "/svg/wifi.svg" : "/svg/wifi-off.svg";
    const githubSvg = theme === "dark" ? "/svg/github-dark.svg" : "/svg/github.svg";

    return (
        <div className="flex flex-col items-center justify-center">
            <a href={liveLink}>
                <Image
                    src={liveSvg}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-6 w-6 mb-2 shadow-md shadow-[#48EDFF] dark:shadow-[#87ACFD]"
                />
            </a>
            <a href={repoLink}>
                <Image
                    src={githubSvg}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-6 w-6 mb-2 shadow-md shadow-[#48EDFF] dark:shadow-[#87ACFD]"
                />
            </a>
        </div>
    );
}
export default dynamic(() => Promise.resolve(ProjectCardIcons), {ssr: false});