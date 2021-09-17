import style from '../styles/Frontend.module.scss'
import {FaHtml5, FaWordpress, FaFigma, FaJs} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

  const leftVariant = {
    left: {
      x: '-10px',
      color: '#ff2768'
    }, 
    right: {
      x: 0, 
      color: '#069ce5'
    }
  }
const Frontend = () => {
   useEffect(() => {
    Aos.init({duration: 1500});
  })
  return(
    <div className={style.frontend}>
      <h5 data-aos="fade-in"> Front-End Development </h5>
      
      <div data-aos="fade-up" className={style.stacks}>
        <motion.div className={style.skillset1} 
        >
          <FaHtml5 className={style.icon} />
          <div className={style.stackcon}>
          <p> HTML5 </p>
          <p> CSS3 </p>
          <p> TailwindCss</p>
          <p> Sass </p>
          </div>
        </motion.div>
        <div data-aos="fade-left" className={style.skillset2} >
        <FaJs className={style.icon} />
          <div className={style.stackcon}>
          <p> JavaScript </p>
          <p> ReactJs</p>
          <p> NextJs</p>
          <p> Framer Motion </p>
          <p> Sanity Studio </p>
          <p> Github </p>
          </div>
        </div>
        <div data-aos="fade-right" className={style.skillset3} >
        <FaWordpress className={style.icon} />
          <div className={style.stackcon}>
          <p> WordPress </p>
          <p> Elementor </p>
          <p> Woo Commerce</p>
        </div>
        </div>
        
        <div data-aos="fade-in" className={style.skillset4} >
          <FaFigma className={style.icon} />
          <div className={style.stackcon}>
          <p> Adobe Photoshop </p>
          <p> Canva </p>
          <p> Figma </p>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Frontend