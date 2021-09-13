import style from '../styles/Chex.module.scss' 
import {FaChevronLeft, FaChevronRight, FaCircle} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Chex = () => {
  return(
    <div className={style.hex}>
        <motion.div className={style.chex}
        initial= {{x: '100vw'}}
        animate = {{x: -500}} 
        transition = {{duration: 3, yoyo: Infinity}} 
        >
          <h2>CHE<span><FaChevronRight className={style.icon} /><FaChevronLeft className={style.icon2} /></span><span><FaCircle className={style.circle} /></span></h2>
        </motion.div>
    </div>
    )
}

export default Chex