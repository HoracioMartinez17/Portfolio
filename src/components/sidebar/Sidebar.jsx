"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Links } from './links/Links'
import './sidebar.scss'
import { ToggleButton } from './togegleButton/ToggleButton'

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);

    const variants = {
        open: {
            lipPath: 'circle(1200px at 50px 50px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
    }
    return (
        <motion.aside className='sidebar' animate={open ? 'open' : 'closed'}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.aside>
    )
}
