"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";

const sendEmail = async (formData: ContactFormFields) => {
    try {
        const response = await fetch('/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json(); // this is the response from your API route
            console.log('Email sent:', data);
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation: ", error);
    }
};

const ContactForm = ({ closeForm, isOpen }: {closeForm: Function, isOpen:boolean}) => {
    const empty_form: ContactFormFields = { name: '', email: '', message: '' };
    const [formData, setFormData] = useState(empty_form);
    const variants = {
        open: { x: -300, y: 100, scale: 1 },
        closed: { x: 100, y: 100, scale: 0.5 },
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendEmail(formData);
        setFormData(empty_form);
        closeForm();
    };

    return (
        <motion.div
            initial={{ x: 100, y:100, scale: 0.5 }}
            animate={ isOpen ?  "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="contactForm flex items-center">
                <form className="bg-black dark:bg-white bg-opacity-30 dark:bg-opacity-40 text-[#0B1121] dark:text-[#F8FAFC] shadow-md shadow-[#48EDFF] dark:shadow-[#87ACFD] rounded-xl px-8 pt-6 pb-8 mb-4 w-max" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="description">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-[#48EDFF] dark:bg-[#87ACFD] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto" type="submit">
                            Contact
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export interface ContactFormFields {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

export default ContactForm;
