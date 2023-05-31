import Image from 'next/image'
import {useTheme} from "next-themes";
import dynamic from "next/dynamic";

const ContactBtn = ({ toggleContactForm }: {toggleContactForm: Function}) => {
    const { theme } = useTheme();
    const themeSvg = theme === "dark" ? "/svg/envelope-fill-dark.svg" : "/svg/envelope-fill.svg";
    return (
        <button onClick={() => toggleContactForm()} className="bg-black bg-opacity-30 dark:bg-white dark:bg-opacity-50 p-2 rounded-lg m-2">
            <Image
                src={themeSvg}
                alt={""}
                width={0}
                height={0}
                className="h-6 w-6 cursor-pointer"
            />
        </button>
    );
}
export default dynamic(() => Promise.resolve(ContactBtn), {ssr: false})