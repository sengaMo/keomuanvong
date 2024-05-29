import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const emailServiceId = import.meta.env.VITE_REACT_SERVICEID;
const emailTemplateId = import.meta.env.VITE_REACT_TEMPLATEID;
const emailPublicKey = import.meta.env.VITE_REACT_PUBLICKEY;

const ContactIndex = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname.length <= 0 || email <= 0 || message <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields",
      });
    } else {
      emailjs
        .sendForm(emailServiceId, emailTemplateId, form.current, emailPublicKey)
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your message has been sent",
            });

            setFullname("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to send message",
            });
          }
        );
    }
  };

  return (
    <div className="min-h-[50vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
        >
          <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
              <div className="flex flex-col">
                <p className="text-xl font-bold text-center mb-8">Contact Me</p>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-[350px] xl:w-[450px]"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="from_name"
                    className="outline outline-1 outline-custom-500 rounded-md px-2 py-1"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="from_email"
                    className="outline outline-1 outline-custom-500 rounded-md px-2 py-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    placeholder="Your Perpose"
                    name="message"
                    className="outline outline-1 outline-custom-500 rounded-md px-2 py-1"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    value={"send"}
                    className="bg-custom-500 text-white rounded-md px-4 py-1 hover:bg-custom-600 transition-all duration-100 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            {/* Form Contact */}
            <div className="w-w-full flex justify-center"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactIndex;
