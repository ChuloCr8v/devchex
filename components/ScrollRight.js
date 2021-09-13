import style from './../styles/ScrollRight.module.scss'
import {motion} from 'framer-motion'
import {FaChevronDown} from 'react-icons/fa'


const Scroll = () => {
  return(
    <motion.div className={style.scroll}
    animate = {{y: -10}} 
    transition = {{ duration: 0.5, yoyo: Infinity}} 
    >
      <span> <p> S </p> <p> c </p> <p> r </p> <p> o </p> <p> l </p> <p> l </p> </span>
      <FaChevronDown className={style.icon} />
    </motion.div>
    )
}

export default Scroll 