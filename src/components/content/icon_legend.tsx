"use client"
import {useTheme} from "next-themes";
import Image from "next/image";
import dynamic from "next/dynamic";

function IconLegened() {
    const { theme } = useTheme();
    const githubSvg = theme === "dark" ? "/svg/github-dark.svg" : "/svg/github.svg";

    return (
        <div className="flex flex-row gap-5 max-w-xl items-center mb-4">
            <div className="flex flex-row items-center">
                <Image
                    src={"/svg/wifi.svg"}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-4 w-4"
                />
                <div className="ml-2 text-sm">
                    App link
                </div>
            </div>

            <div className="flex flex-row items-center">
                <Image
                    src={"/svg/wifi-off.svg"}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-4 w-4"
                />
                <div className="ml-2 text-sm">
                    App is not live
                </div>
            </div>

            <div className="flex flex-row items-center">
                <Image
                    src={githubSvg}
                    alt={""}
                    width={0}
                    height={0}
                    className="h-4 w-4"
                />
                <div className="ml-2 text-sm">
                    Code link
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(IconLegened), {ssr: false});