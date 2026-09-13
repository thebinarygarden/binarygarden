'use client'
import { motion } from "framer-motion";
import { ThemeToggleButton } from "@binarygarden/flora/theme";

export function Navbar() {
    return (
        <div className="fixed top-4 right-4 flex">
            <motion.div
                className="m-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <ThemeToggleButton />
            </motion.div>
        </div>
    );
}
