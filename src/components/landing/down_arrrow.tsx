"use client"
import Image from 'next/image'
import dynamic from "next/dynamic";
import {useTheme} from "next-themes";
import { motion } from "framer-motion";

const DownArrow = () => {
    const { theme } = useTheme();
    const themeSvg = theme === "dark" ? "/svg/chevron-double-down-dark.svg" : "/svg/chevron-double-down.svg";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 flex justify-center items-center z-[-1] pt-52">
            <Image
                src= {themeSvg}
                alt={""}
                width={0}
                height={0}
                className="h-14 w-14" />
            </div>
        </motion.div>
    );
}
export default dynamic(() => Promise.resolve(DownArrow), {ssr: false});