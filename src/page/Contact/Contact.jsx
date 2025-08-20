import Lottie from "lottie-react";
import animation from '../../../src/assets/ContactAnimations.json'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zas7kxh', 'template_pn2ml2r', form.current, {
                publicKey: 'LNGatKuNsBOF1rF2V',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Email Send Successful ✅",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
         <div
            id="contact"
            className="w-full min-h-screen bg-gradient-to-br from-black via-[#001630] to-[#000814] py-16 px-6 text-blue-300"
        >
            <h1 className="text-3xl font-bold text-center mb-12 text-blue-400">Get In Touch</h1>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
                {/* Animation */}
                <div className="w-full md:w-1/2 bg-[#0a1a3c] rounded-xl shadow-lg p-6 flex justify-center items-center border border-blue-700">
                    <Lottie animationData={animation} className="w-full max-w-md h-72 md:h-96 object-contain" />
                </div>

                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full md:w-1/2 bg-[#0a1a3c] rounded-xl shadow-lg p-8 border border-blue-700"
                >
                    <label
                        className="block mb-2 font-semibold text-blue-300"
                        htmlFor="user_name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className="w-full mb-6 px-4 py-3 bg-[#051025] border border-blue-600 rounded-md text-blue-200 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Your name"
                        required
                    />

                    <label
                        className="block mb-2 font-semibold text-blue-300"
                        htmlFor="user_email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        className="w-full mb-6 px-4 py-3 bg-[#051025] border border-blue-600 rounded-md text-blue-200 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Your email"
                        required
                    />

                    <label
                        className="block mb-2 font-semibold text-blue-300"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        className="w-full mb-6 px-4 py-3 bg-[#051025] border border-blue-600 rounded-md resize-none text-blue-200 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Write your message here..."
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;