'use client'
import {motion} from 'framer-motion'
import './hero.scss'
import Image from 'next/image';
const textVariants = {
  initial:{
    x: -500,
    opacity:0,
  },
  animate: {
    x:0,
    opacity:1,
    transition: {
      duration:1,
      staggerChildren:0.1
    },
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition: {
        duration:2,
        repeat: Infinity
      }
    }
  
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    opacity: 1,
    transition: {
      duration: 20,
      repeat: Infinity, // Configura el bucle infinito
      repeatType: 'mirror', // Hace que la animación vuelva al estado inicial al repetirse
    },
  },
};



export const Hero = () => {
  return (
    <div className='hero'>
                    <div id="container-stars">
              <div id="stars"></div>
            </div>
      <div className="wrapper">
      <motion.div className="textContainer"  variants={textVariants} initial='initial' animate='animate'> 
        <motion.h2  variants={textVariants} >Horacio Martinez</motion.h2>
        <motion.h1  variants={textVariants}>Desarrollador Full Stack</motion.h1>
        <div className="buttons">
          <motion.button className="btn" type="button"  variants={textVariants}><a href='#Portafolio'>Mira mis trabajos!</a>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div></motion.button>
          <motion.button className="btn" type="button" variants={textVariants}><a href='#Contacto'>Contáctame</a>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div></motion.button>
        </div>
        <motion.img src="/scroll.png" alt=""  variants={textVariants} animate='scrollButton'/>
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} animate='animate'initial='initial'>
        Desallorrador Front-End y Back-End
      </motion.div>
      <div className="imageContainer">
        <Image src='/hero1.png'
        width={500}
        height={500}
        alt="Picture of the author"/ >
      </div>
    </div>
  )
}
