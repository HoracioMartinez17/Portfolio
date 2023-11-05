'use client'
import { Sidebar } from '../sidebar/Sidebar'
import { Links } from '../sidebar/links/Links'
import './navbar.scss'
import {motion} from 'framer-motion'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Sidebar/>
       <div className="wrapper">
        <motion.span
        initial={{opacity:0, scale: 0.5}}
        animate={{opacity:1, scale: 1}}
        transition={{duration: 0.5}}>
          Horacio Dev
      </motion.span>
        <div className="social">
            <Links/>
        </div>
       </div>
    </nav>
  )
}
