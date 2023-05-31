import Image from "next/image";
import DownArrow from "@/components/landing/down_arrrow";

export default function Landing() {
    return (
        <div className="min-h-screen bg-transparent">
            <main className="flex flex-col min-h-screen justify-center items-center bg-transparent">
                <div className={"bgWrap"}>
                    <Image
                    src= { "/landing_fog.png" }
                    alt={""}
                    fill
                    sizes="100vh"
                    />
                </div>
                <div className="flex flex-col items-center text-center text-[#0B1121] dark:text-[#F8FAFC]">
                    <h1 className="text-4xl font-bold mb-4">Binary Garden</h1>
                    <div className="w-16 border-b mx-auto mb-4"></div>
                    <p className="text-sm max-w-xs">
                        A repository of open-source software, created with <span className="text-[#48EDFF] dark:text-[#87ACFD] text-xl">love</span>, <span className="italic">for the people</span>
                    </p>
                </div>
                <DownArrow></DownArrow>
            </main>

        </div>
    );
}