"use client"
import { motion } from "framer-motion";
import { IconArrow } from "@binarygarden/flora/icons";

export default function DownArrow() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 flex justify-center items-center z-[-1] mt-80 text-(--on-background)">
                <IconArrow orientation="down" size={56} />
            </div>
        </motion.div>
    );
}
