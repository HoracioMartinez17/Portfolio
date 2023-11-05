"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Links } from './links/Links'
import './sidebar.scss'
import { ToggleButton } from './togegleButton/ToggleButton'

export const Sidebar = () => {
    const [shouldRender, setShouldRender] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const closeSidebar = (e) => {
            if (open && !e.target.closest('.sidebar')) {
                setOpen(false);
            }
        };

        document.body.addEventListener('click', closeSidebar);

        return () => {
            document.body.removeEventListener('click', closeSidebar);
        };
    }, [open]);
    useEffect(() => {
        // Simula una carga inicial retrasada
        setTimeout(() => {
            setShouldRender(true);
        }, 1000); // Puedes ajustar el tiempo según tus necesidades
    }, []);

    const variants = {
        open: {
            clipPath: 'circle(1200px at 30px 50px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 20,

            }
        },
        closed: {
            clipPath: 'circle(1rem at 30px 50px)',
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
    }
    return (
        shouldRender ? (
            <motion.div className="sidebar" animate={open ? 'open' : 'closed'} >
                <motion.div className="bg" variants={variants}>
                    <Links />
                </motion.div>
                <ToggleButton setOpen={setOpen} />
            </motion.div>
        ) : null
    );
};