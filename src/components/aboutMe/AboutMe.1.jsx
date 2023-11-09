"use client";
import "./aboutMe.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AboutMe = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <div className="container">
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div className="wrapper-1">
        <div class="pyramid-loader" ref={ref}>
          <div class="wrapper">
            <span class="side side1"></span>
            <span class="side side2"></span>
            <span class="side side3"></span>
            <span class="side side4"></span>
            <span class="shadow"></span>
          </div>
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>¡Sobre mí!</h2>
          <p>
            Mi experiencia abarca tanto el desarrollo front-end como el
            back-end, lo que me permite diseñar y crear aplicaciones sólidas y
            fáciles de usar de principio a fin. Mi dominio de lenguajes como
            HTML, CSS, JavaScript y una variedad de marcos de JavaScript como
            ReactJs, NextJs, Node, Express me permite dar vida a las ideas al
            mismo tiempo que garantizo la funcionalidad, la seguridad y la
            escalabilidad.
          </p>
          <h2>#skills</h2>
          <ul>
            <li>
              <p>
                Languages:
                <span>
                  javascript
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="328"
                    height="328"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#F0DB4F"
                      d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.334 13.055c.72.58 1.438.865 2.156.858c.44 0 .778-.08 1.012-.242a.75.75 0 0 0 .341-.66a.971.971 0 0 0-.34-.748c-.235-.205-.679-.41-1.332-.616c-.784-.227-1.39-.52-1.815-.88c-.418-.36-.63-.862-.638-1.507c0-.609.264-1.118.792-1.529c.514-.41 1.17-.616 1.97-.616c1.114 0 2.009.271 2.683.814l-.77 1.199a2.597 2.597 0 0 0-.935-.462a3.211 3.211 0 0 0-.946-.165c-.38 0-.685.07-.913.209c-.227.14-.34.323-.34.55c0 .25.139.462.417.638c.28.169.756.356 1.43.561c.814.242 1.394.565 1.738.968c.345.403.517.917.517 1.54c0 .638-.245 1.188-.737 1.65c-.484.455-1.188.693-2.112.715c-1.21 0-2.222-.363-3.036-1.089l.858-1.188Zm-5.53.638c.235.147.517.22.847.22c.345 0 .63-.099.858-.297c.227-.205.341-.561.341-1.067v-5.302h1.485v5.588c-.022.865-.271 1.489-.748 1.87a2.466 2.466 0 0 1-.891.484a3.296 3.296 0 0 1-.935.143c-.55 0-1.038-.095-1.463-.286c-.455-.205-.836-.568-1.144-1.089l1.034-.847c.19.257.396.451.616.583Z"
                    />
                  </svg>
                </span>
              </p>
            </li>
            <li>
              <p>Frameworks</p>
            </li>
            <li>
              <p>Databases</p>
            </li>
            <li>
              <p>Tools</p>
            </li>
            <li>
              <p>Others</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
