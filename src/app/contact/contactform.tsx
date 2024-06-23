'use client'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function ContactForm() {
    const form = useRef(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_dqe92mj', 'template_gzq6a26', form.current, {
                    publicKey: 'HiET5pgn0Rs2A0da9',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.error('Form ref is not defined.');
        }


        window.location.href = '/contact/submit'
    };

    return (<>
        <div className="h-fit flex flex-col justify-center items-center p-3">
            <div className="w-1/2">
                <form ref={form} className="flex flex-col gap-2" onSubmit={sendEmail}>
                    <label htmlFor="name">Name <span className="text-red-500">*</span></label>
                    <input name="name" type="text" className="border-2 p-3" required={true} />
                    <label htmlFor="phone-number">Phone Number <span className="text-red-500">*</span></label>
                    <input name="phone-number" type="tel" className="border-2 p-3" required={true} />
                    <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input name="email" type="email" className="border-2 p-3" required={true} />
                    <label htmlFor="desc">What are you looking to get done? <span className="text-red-500">*</span></label>
                    <textarea name="desc" rows={5} cols={5} className="border-2 p-3" required={true} />
                    <div className="flex flex-row gap-2 py-5">
                        <input type="radio" required={true} />
                        <label>By clicking here you agree to be contacted by RKW Home Solutions via phone, text or email. You also agree that your information may be shared to other associates in the surrounding area.</label>
                    </div>
                    <button type="submit" className="border-2 p-2 w-1/2 ">Submit</button>
                </form>
            </div>
        </div>
    </>)
}