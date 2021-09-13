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
          <FaHome className={style.icon} />
          <Link href="/" > Home </Link>
        </li>
        
        <li>
          <FaUser className={style.icon} />
          <Link href="/about"> About </Link>
        </li>
        
        <li>
          <FaTools className={style.icon} />
          <Link href="/skills"> Skills </Link>
        </li>
        
        <li>
          <FaBriefcase className={style.icon} />
          <Link href="/portfolio"> Portfolio </Link>
        </li>
        
        <li>
          <FaIdCard className={style.icon} />
          <Link href="/contact"> Contact </Link>
        </li>
      </ul>   
      
    </motion.nav>
  )
}

export default MobileMenu