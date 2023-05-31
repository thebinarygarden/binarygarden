import emailjs from "@emailjs/nodejs";

export async function POST(request: Request) {
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
        console.error('Please check your environment variables, some are missing');
        return;
    }

    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, await request.json(), {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY
    })
        .then(function(response) {
            console.log('EMAIL SENT', response);
        }, function(err) {
            console.error('EMAIL NOT SENT', err);
        });
}