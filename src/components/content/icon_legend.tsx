import Image from "next/image";
import { IconGithub } from "@binarygarden/flora/icons";

export default function IconLegened() {
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
                <IconGithub size={16} />
                <div className="ml-2 text-sm">
                    Code link
                </div>
            </div>
        </div>
    );
}
