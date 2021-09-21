import SocialIcons from './SocialIcons'
import style from  './../styles/HeroSection.module.scss'
import Intro from './Intro'
import {FaFile, FaIdCard, FaTimes} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {useState} from 'react'
import Logo from '../public/logo.png'
import ScrollContainer from './ScrollContainer'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'


const HeroSection = () => {
 
  const [contact, setContact] = useState(false) 
  
  return(
    <div className={style.herocontainer}>
    <h1 className={style.bgtext} >Dev. <span>CHEX</span></h1>
    {contact && <div className={style.formcontainer}>
    <div className={style.forms}>
    <ContactForm />
    <ContactCard />
    </div>
    <FaTimes onClick={() => setContact(false)} className={style.icon} /> 
    </div>} 
      <motion.div className={style.hero}
      initial = {{ x: '-100vw', opacity: 0 }}
      animate = {{ x: 0, opacity: 1}}
      transition = {{delay: 0.5, type: 'spring', stiffness:50}}
      >
          <div className={style.spin}>
            <img src={Logo.src} alt="Chex" />
            <SocialIcons />
          </div>
        <div className={style.introcontainer}>
          <Intro />
        </div>
        <div className={style.buttons}>
          <motion.button className={style.cvbtn}
          initial = {{ y: -20, opacity: 0}}
          animate = {{y: 0, opacity: 1}}
          transition = {{delay: 4, type: 'spring', stiffness:50 }}
          > <a href="https://drive.google.com/file/d/1oLBAApnT3-q9nQs9UzzkOHz8Lk3tVNm3/view?usp=drivesdk" download> <FaFile className={style.icon} /> Download Cv </a> </motion.button>
          <motion.button  onClick={() => setContact(!contact)} className={style.contactbtn}
            initial = {{ x: -20, opacity: 0}}
            animate = {{x: 0, opacity: 1}} 
            transition = {{ delay: 4.5, type: 'spring', stiffness:50}}
          > 
          <FaIdCard className={style.icon}/>
          Contact Me 
          </motion.button>
       </div>
       <motion.div
       initial = {{opacity: 0}}
       animate = {{opacity: 1}}
       transition = {{ delay: 6}}
       >
       </motion.div>
      </motion.div>
      <div className={style.scrollcontainer}>
        <ScrollContainer />
      </div>
     </div>
    )
}

export default HeroSection