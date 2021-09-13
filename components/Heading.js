import style from '../styles/Heading.module.scss' 
import Image from 'next/image'
import border from '../public/border.png' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Heading = ({heading}) => {
 
   useEffect(() => {
    Aos.init({duration: 1500});
  })
 
  return(
    <div data-aos="fade-up" className={style.heading}>
      <h1>{heading}</h1>
      <img src={border.src} className={style.border} />
    </div>
    )
}

export default Heading 