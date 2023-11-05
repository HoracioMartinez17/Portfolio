import { Parallax } from '../parallax/Parallax'
import { AboutMe } from '../aboutMe/AboutMe'
import { Portfolio } from '../portfolio/Portfolio'
import { Contact } from '../contact/Contact'

export const Main = () => {
  return (
    <>
    <main>
        <section className='section' id="Sobre mí">
        <Parallax type="Sobre mí" />
      </section>
      <section className='section'>
        <AboutMe />
      </section>
      <section className='section' id="Portafolio">
        <Parallax type="Portafolio" />
      </section>
      <Portfolio />
      <section className='section' id="Contacto">
        <Contact />
      </section>
    </main>
    </>
  )
}
