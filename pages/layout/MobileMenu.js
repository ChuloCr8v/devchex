import {FaHome, FaUser, FaTools, FaBriefcase, FaIdCard} from 'react-icons/fa'
import style from './MobileMenu.module.scss'
import {motion} from 'framer-motion'
import Link from 'next/link'

const MobileMenu= () => {
  return(
    <motion.nav className={style.nav}
    initial = {{ y: 20, opacity: 0 }} 
    animate = {{ y: 0, opacity: 1 }} 
    >
      <ul className={style.ul}>
        <li>
          <Link href="/" >
          <div className={style.link} >
          <FaHome className={style.icon} />
          Home 
          </div>
          </Link>
        </li>
        
        <li>
          <Link href="/about"> 
          <div className={style.link} >
          <FaUser className={style.icon} />
          About 
          </div >
          </Link>
        </li>
        
        <li>
          <Link href="/skills"> 
          <div className={style.link} >
          <FaTools className={style.icon} />
          Skills 
          </div>
          </Link>
        </li>
        
        <li>
          <Link href="/portfolio"> 
          <div className={style.link} >
          <FaBriefcase className={style.icon} />
          Portfolio 
          </div>
          </Link>
        </li>
        
        <li>
          <Link href="/contact">
          <div className={style.link} >
          <FaIdCard className={style.icon} />
          Contact 
          </div>
          </Link>
        </li>
      </ul>   
      
    </motion.nav>
  )
}

export default MobileMenu