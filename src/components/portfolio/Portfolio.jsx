"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring,useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Reat Ecomerce",
    img: "https://cdn.pixabay.com/photo/2019/10/07/13/18/mystery-4532583_1280.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturblanditiis beatae facere animi? Mollitia delectus, quo maxime errorblanditiis optio provident ipsam? Hic inventore labore natus quod aspernatur culpa possimus",
  },
  {
    id: 2,
    title: "Next.js Ecomerce",
    img: "https://cdn.pixabay.com/photo/2016/06/08/15/44/landscape-1444023_1280.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturblanditiis beatae facere animi? Mollitia delectus, quo maxime errorblanditiis optio provident ipsam? Hic inventore labore natus quod aspernatur culpa possimus",
  },
  {
    id: 3,
    title: "Vanilla Js Ecomerce",
    img: "https://cdn.pixabay.com/photo/2018/04/29/23/03/fantasy-3361332_1280.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturblanditiis beatae facere animi? Mollitia delectus, quo maxime errorblanditiis optio provident ipsam? Hic inventore labore natus quod aspernatur culpa possimus",
  },
  {
    id: 4,
    title: "Reat Music App",
    img: "https://cdn.pixabay.com/photo/2017/12/26/17/56/fantasy-3041033_1280.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturblanditiis beatae facere animi? Mollitia delectus, quo maxime errorblanditiis optio provident ipsam? Hic inventore labore natus quod aspernatur culpa possimus",
  },
];

const Card = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y= useTransform(scrollYProgress, [0,1],[-300, 300])


  return (<section className="section">
    <div className="container">
    <div className="wrapper">
    <div className="imageContainer" ref={ref}>
      <img src={item.img}/>
    </div>
      <motion.div className='textContainer' style= {{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button>See Demo</button>
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
      <div className="progress">
        <h1>!Proyectos Destacados!</h1>
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
