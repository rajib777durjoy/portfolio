import Lottie from "lottie-react";
import animation from "../../../src/assets/ContactAnimations.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zas7kxh", "template_pn2ml2r", form.current, {
        publicKey: "LNGatKuNsBOF1rF2V",
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message sent 🚀",
          showConfirmButton: false,
          timer: 1600,
        });
      });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#020617] py-24 px-4 text-gray-300"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-3">
          Let’s build something great together
        </p>
      </motion.div>

      {/* Equal Height Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="h-full bg-[#020617] border border-gray-800 rounded-2xl 
                     shadow-xl flex flex-col justify-center p-8"
        >
          <Lottie
            animationData={animation}
            className="w-full h-[380px]"
          />
          <p className="text-center mt-6 text-gray-400 text-sm">
            Available for freelance & full-time opportunities
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="h-full bg-[#020617] border border-gray-800 rounded-2xl 
                     shadow-xl p-8 flex flex-col justify-center"
        >
          <div className="mb-6">
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700
                         focus:border-cyan-400 outline-none transition"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700
                         focus:border-cyan-400 outline-none transition"
            />
          </div>

          <div className="mb-8">
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700
                         focus:border-cyan-400 outline-none resize-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-auto w-full py-3 rounded-md bg-cyan-500 text-black font-semibold
                       hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

