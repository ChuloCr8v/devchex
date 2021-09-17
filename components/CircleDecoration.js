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
      <div className={style.circle1}> </div>
      <div className={style.circle2}> </div>
      <motion.div className={style.circle3}
      animate = {{
      backgroundColor: ['white', 'yellow', 'orange', 'pink', 'blue', 'red'] , 
      filter: [
        'hue-rotate(360deg)', 
        'hue-rotate(180deg)', 
        'hue-rotate(90deg)', 
        'hue-rotate(0)'
        ]
      }} 
      ></motion.div>
    </div>
    )
}

export default CircleDecoration 