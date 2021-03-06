import style from './About.module.scss' 
import Projects from '../components/Portfolio'
import {motion, AnimatePresence} from 'framer-motion'

const Portfolio = () => {
  return(
    <AnimatePresence >
    <motion.div className={style.aboutme}>
      <h1 className={style.heading}> Live <span>Projects</span></h1>
       <div className="projects">
        <Projects  />
      </div>
      <style jsx>
      {`
        .projects {
           padding-top: 150px;
         }
         
         @media (min-width: 788px){
           
         .projects {
           padding-top: 600px;
         }
         
         h1 {
           padding-top: 80px;
         }
         }
      `} 
      </style>
    </motion.div>
    </AnimatePresence>
    )
}

export default Portfolio 