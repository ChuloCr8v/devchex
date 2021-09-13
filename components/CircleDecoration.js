import style from '../styles/CircleDecoration.module.scss' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const CircleDecoration = () => {
  
   useEffect(() => {
    Aos.init({duration: 1500});
  })
  
  return(
    <div data-aos="fade-in" className={style.circledecoration}>
      <div className={style.circle1}> </div>
      <div className={style.circle2}> </div>
    </div>
    )
}

export default CircleDecoration 