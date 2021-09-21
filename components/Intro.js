import style from  './../styles/Intro.module.scss' 
import {motion} from 'framer-motion'

const Intro = () => {
  return(
    <div className={style.intro}>
      <motion.h1
      initial = {{ y: -20, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 1.5, type: 'spring', stiffness:50}}
      > 
      Hi, 
      </motion.h1>
      <motion.h1
      initial = {{ y: 20, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 2, type: 'spring', stiffnes: 50}}
      > 
      I&apos;m <span>Chex.</span>
      </motion.h1>
      <motion.h1
      initial = {{ y: 20, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 2.5, type: 'spring', stiffnes: 50}}
      className={style.role1}
      > 
      Front-End Developer, 
      </motion.h1>
      <motion.h1
      className={style.role}
      initial = {{ y: 20, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 3, type: 'spring', stiffnes: 50}}
    
      > 
      Wordpress Developer, 
      </motion.h1>
      <motion.h1
      className={style.role}
      initial = {{ y: 20, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 3.5, type: 'spring', stiffnes: 50}}
    
      > 
      Content Creator. 
      </motion.h1>
    </div>
    )
}

export default Intro