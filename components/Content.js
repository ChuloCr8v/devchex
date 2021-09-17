import style from '../styles/Content.module.scss'
import {FaEdit} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Content = () => {
  
   useEffect(() => {
    Aos.init({duration: 2000});
  })
  
  return(
    <div className={style.content}>
      <h5 data-aos="fade-up"> Content Creation </h5>
      <div data-aos="zoom-in" className={style.list}>
        <FaEdit className={style.icon} />
        <div className={style.item}>
          <p> S.E.0 </p>
        </div>
        <div className={style.item}>
          <p> Storytelling </p>
        </div>
        <div className={style.item}>
          <p> Fiction </p>
        </div>
        <div className={style.item}>
          <p> Web Contents </p>
        </div>
        <div className={style.item}>
          <p> Non-Fiction </p>
        </div>
        <div className={style.item}>
          <p> Articles</p>
        </div>
      </div>
    </div>
    )
}

export default Content 