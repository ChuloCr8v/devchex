import style from '../styles/CircleDecoration.module.scss' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import {motion} from 'framer-motion'
const CircleDecoration = () => {
  
   useEffect(() => {
    Aos.init({duration: 1500});
  })
  
  return(
    <div data-aos="fade-in" className={style.circledecoration}>
      
    </div>
    )
}

export default CircleDecoration 