import Image from 'next/image'
import {useTheme} from "next-themes";
import dynamic from "next/dynamic";

const DarkmodeBtn = () => {
    const { theme, setTheme } = useTheme();
    const themeSvg = theme === "dark" ? "/svg/sun-fill.svg" : "/svg/moon-fill.svg";
    const toggleTheme = (ct: string) => {
        if(ct === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    };

    return (
        <button onClick={() => toggleTheme(theme!)} className="bg-black bg-opacity-30 dark:bg-white dark:bg-opacity-50 p-2 rounded-lg m-2">
            <Image
                src={ themeSvg }
                alt={""}
                width={0}
                height={0}
                className="h-6 w-6 cursor-pointer"
                />
        </button>
    )
}
export default dynamic(() => Promise.resolve(DarkmodeBtn), {ssr: false})