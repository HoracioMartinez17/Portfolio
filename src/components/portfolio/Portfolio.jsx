"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "SoundScape",
    img: "/apollofy.png",
    desc: " SoundScape es una popular plataforma de streaming de música digital que ofrece una amplia colección de pistas, álbumes, podcasts y otro contenido de audio. La interfaz de la aplicación está construida con React + Vite + Typescript. Puedes ver la estructura y las tecnologías utilizadas en el repositorio de GitHub.",
    url: "https://soundscape-music-player.vercel.app/",
    url_git: "https://github.com/HoracioMartinez17/soundscape-deploy"
  },
  {
    id: 2,
    title: "MovieHub",
    img: "/MovieHub.png",
    desc: "MovieHub es una aplicación que te permite gestionar una lista de películas. Cada película de la aplicación tiene un nombre, una imagen, una fecha y un género. Podrá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en estas películas. La interfaz de la aplicación está construida con Next.js + Typescript. Puedes ver la estructura y las tecnologías utilizadas en el repositorio de GitHub.",
    url: "https://front-end-movie-hub-next-13.vercel.app/",
    url_git: "https://github.com/HoracioMartinez17?tab=repositories"
  },
];

const Card = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="section_porfolio ">
      <div className="containerPorfolio">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <div className="portfolio_div-button">
              <button class="button">
                <div class="text">
                  <a href={item.url} target="_blank">
                    Demo{" "}
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="328"
                  height="328"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#999999"
                    d="M12 4v2h6.586l-6.536 6.536a6.954 6.954 0 0 0-2.05 4.95V28h2V17.485a4.968 4.968 0 0 1 1.464-3.535L20 7.414V14h2V4Z"
                  />
                </svg>
              </button>
              <button class="button_git">
                <div class="text">
                  <a href={item.url_git} target="_blank">
                    GitHub{" "}
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="328"
                  height="328"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#999999"
                    d="M12 4v2h6.586l-6.536 6.536a6.954 6.954 0 0 0-2.05 4.95V28h2V17.485a4.968 4.968 0 0 1 1.464-3.535L20 7.414V14h2V4Z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div className="progress">
        <h1>¡Proyectos Top!</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
