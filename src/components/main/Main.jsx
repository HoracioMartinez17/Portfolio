import { Parallax } from "../parallax/Parallax";
import { AboutMe } from "../aboutMe/AboutMe.1";
import { Portfolio } from "../portfolio/Portfolio";
import { Contact } from "../contact/Contact";

export const Main = () => {
  return (
    <>
      <main>
        <section className="section" id="Sobre mí">
          <AboutMe />
        </section>
        <section className="section" id="Portafolio">
          <Parallax type="Portafolio" />
        </section>
        <Portfolio />
        <section className="section" id="Contacto">
          <Contact />
        </section>
      </main>
    </>
  );
};
