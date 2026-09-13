import Image from 'next/image'
import { IconGithub } from "@binarygarden/flora/icons";

const ProjectCardIcons = ({repoLink, liveLink, isLive}: {
    repoLink: string;
    liveLink: string;
    isLive: boolean;
}) => {
    const liveSvg = isLive ? "/svg/wifi.svg" : "/svg/wifi-off.svg";

    return (
        <div className="flex flex-col items-center justify-center">
            <a href={liveLink}>
                <Image
                    src={liveSvg}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-6 w-6 mb-2 shadow-md shadow-(color:--primary)"
                />
            </a>
            <a href={repoLink} className="mb-2 shadow-md shadow-(color:--primary)">
                <IconGithub size={24} />
            </a>
        </div>
    );
}
export default ProjectCardIcons;
