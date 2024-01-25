import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { portfolio } from "../portfolio/PortfolioIndex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMeIndex = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [chooseProject, setChooseProject] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  const serviceId = import.meta.env.VITE_REACT_SERVICEID;
  const templateId = import.meta.env.VITE_REACT_TEMPLATEID;
  const publicKey = import.meta.env.VITE_REACT_PUBLICKEY;

  const sendingEmail = {
    from_name: firstName + " " + lastName,
    from_email: email,
    to_name: "Sengathith",
    message: description,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      email.length <= 0 ||
      phoneNumber.length <= 0 ||
      chooseProject.length <= 0 ||
      description.length <= 0
    ) {
      setError(true);
    } else {
      emailjs
        .send(serviceId, templateId, sendingEmail, publicKey)
        .then((res) => {
          toast.success("🦄 Send Successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
          });
          console.log(res);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setChooseProject("");
          setDescription("");
        })
        .catch((err) => {
          toast.error("🦄 Send Failed!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
          });
          console.log(err);
        });
    }
  };
  return (
    <>
      <ToastContainer />
      <section id="contact">
        <div className="flex justify-center mt-20 phone:mt-[200px] w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl text-center">Contact Me</h1>
            <div className="w-full ">
              <p className="text-gray-700 w-80 phone:w-full ml-[160px] phone:ml-[0px] mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-center mt-10 gap-4">
                <div className="flex flex-col w-80">
                  <label className="text-sm">First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {error && firstName.length <= 0 ? (
                    <p className="text-red-500 text-xs">
                      First Name is Required
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col w-80">
                  <label className="text-sm">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {error && lastName.length <= 0 ? (
                    <p className="text-red-500 text-xs">
                      Last Name is Required
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                <div className="flex flex-col w-80">
                  <label className="text-sm">Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && email.length <= 0 ? (
                    <p className="text-red-500 text-xs">Email is Required</p>
                  ) : null}
                </div>
                <div className="flex flex-col w-80">
                  <label className="text-sm">Phone Number:</label>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {error && phoneNumber.length <= 0 ? (
                    <p className="text-red-500 text-xs">Phone is Required</p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                <div className="flex flex-col w-[320px] phone:w-[650px]">
                  <label className="text-sm">Choose Project:</label>
                  <select
                    type="text"
                    placeholder="Choose Project"
                    className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    value={chooseProject}
                    onChange={(e) => setChooseProject(e.target.value)}
                  >
                    <option value="">Choose..</option>
                    {portfolio.map((item) => (
                      <option value={item.title}>{item.title}</option>
                    ))}
                  </select>
                  {error && chooseProject.length <= 0 ? (
                    <p className="text-red-500 text-xs">Choose is Required</p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                <div className="flex flex-col w-[320px] phone:w-[650px]">
                  <label className="text-sm">Description:</label>
                  <textarea
                    type="text"
                    className="text-sm border border-gray-300 p-10 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {error && description.length <= 0 ? (
                    <p className="text-red-500 text-xs">
                      Description is Required
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                <div className="flex flex-col w-[320px] phone:w-[650px]">
                  <button
                    type="submit"
                    className=" bg-gradient-to-b from-emerald-500 to-emerald-700 hover:shadow-md text-white font-bold py-2 px-4 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMeIndex;
