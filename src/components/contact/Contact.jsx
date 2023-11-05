"use client";

import { motion, useInView } from "framer-motion";

import "./contact.scss";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "10px" });
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Contáctame!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>LitStyle17@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Ubicación </h2>
          <span>Málaga-España</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Linkedin</h2>
          <span>LitStyle17@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input type="text" required placeholder="Nombre" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} required placeholder="Mensaje" />
          <button class="btn" type="button">
            <strong>Enviar</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};
