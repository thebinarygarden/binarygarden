'use client'
import DarkmodeBtn from "@/components/navbar/darkmode_button";
import ContactBtn from "@/components/navbar/contact/contact_button";
import ContactForm from "@/components/navbar/contact/contact_form";
import {useEffect, useState} from "react";
import Alert from "@/components/navbar/contact/alert";
import { motion } from "framer-motion";

export function Navbar() {
    const [showAlert, setShowAlert] = useState(false);
    const [ open, setOpen ] = useState(false);
    const toggleContactForm = () => {
        setOpen(!open);
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;
        if (showAlert) {
            timeout = setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }

        // Cleanup function to clear the timeout if the component unmounts
        return () => {
            clearTimeout(timeout);
        };
    }, [showAlert]);

    const closeForm = async () => {
        setOpen(false);
        setShowAlert(true);
    };

    return (
        <div className="fixed top-4 right-4 flex">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <DarkmodeBtn />
                <ContactBtn toggleContactForm={ toggleContactForm } />
            </motion.div>
            <ContactForm closeForm={ closeForm } isOpen={ open } />
            <Alert alerting={showAlert} ></Alert>
        </div>
    );
}