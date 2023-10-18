import React, { useEffect, useRef, useState } from "react";

import { styles } from "../style";
import slideIn from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { useForm } from "@formspree/react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const [state, handleSubmit] = useForm("mjvqgzdn");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       "service_jnlc40g",
  //       "template_n488x4o",
  //       {
  //         from_name: form.name,
  //         to_name: "Ehtasham Toor",
  //         from_email: form.email,
  //         to_email: "ehtashamtoor50@gmail.com",
  //         message: form.message,
  //       },
  //       "zGw9jdNWhrlZQQjru"
  //     )
  //     .then(() => {
  //       setLoading(false);
  //       alert("Thankyou! I will get back to you ASAP");
  //       setForm({ name: "", email: "", message: "" }, (error) => {
  //         setLoading(false);
  //         console.log(error.message);
  //         alert("Something went wrong");
  //       });
  //     })
  //     .catch((e) => console.log(e.message));
  // };
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={() => {
          slideIn("left", "tween", 0.2, 1);
        }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact </h3>
        <h1 className="text-2xl text-green-500">
          {state.succeeded && "Email Sent! Will get back to You ASAP"}
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary p-4 px-6 placeholder:text-secondary rounded-lg outline-none borders-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="xyx12@abc.com"
              className="bg-tertiary p-4 px-6 placeholder:text-secondary rounded-lg outline-none borders-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Initiate a conversation by saying Hi"
              className="bg-tertiary p-4 px-6 placeholder:text-secondary rounded-lg outline-none borders-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg hover:bg-primary"
          >
            {state.submitting ? "Sending Email" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={() => {
          slideIn("right", "tween", 0.2, 1);
        }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
