import style from '../styles/Frontend.module.scss'
import {FaHtml5, FaCss3, FaSass, FaJs} from 'react-icons/fa'
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
        <div className={style.skillset1} >
          <p> HTML5 </p>
          <p> CSS3 </p>
          <p> TailwindCss</p>
          <p> Sass </p>
        </div>
        <div data-aos="fade-left" className={style.skillset2} >
          <p> JavaScript </p>
          <p> ReactJs</p>
          <p> NextJs</p>
          <p> Framer Motion </p>
        </div>
        <div data-aos="fade-right" className={style.skillset3} >
          <p> Sanity Studio </p>
          <p> WordPress </p>
          <p> Elementor </p>
          <p> Github </p>
        </div>
        <div data-aos="fade-in" className={style.skillset4} >
          <p> Woo Commerce</p>
          <p> Adobe Photoshop </p>
          <p> Canva </p>
        </div>
        </div>
    </div>
    )
}

export default Frontend