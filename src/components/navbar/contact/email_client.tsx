import emailjs from '@emailjs/browser';
import {ContactFormFields} from "@/components/navbar/contact/contact_form";

export const sendEmail = (formData: ContactFormFields) => {
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
        console.error('Please check your environment variables, some are missing');
        return;
    }

    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, formData, process.env.EMAILJS_PUBLIC_KEY)
        .then(function(response) {
            console.log('EMAIL SENT', response);
        }, function(err) {
            console.error('EMAIL NOT SENT', err);
        });
};
