'use client'
import {motion, useScroll, useTransform} from 'framer-motion'
import  { useRef } from 'react';
import './parallax.scss'

export const Parallax = ({ type }) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    return (
        <div className="parallax"
        ref={ref}
        style={{
            background: type==='Sobre mí' ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
        }}>
            <motion.h1 style={{y: yText}}>{type ==='Sobre mí' ? '¿Quién soy?': '¿Qué proyectos realice?'}</motion.h1>
            <motion.div className='mountains'></motion.div>
            <motion.div className='planets' style={{y: yBg}}></motion.div>
            <motion.div className='stars' style={{x: yBg}}></motion.div>
        </div>
    )
}