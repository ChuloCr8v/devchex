import style from '../styles/MessageSent.module.scss' 
import logo from '../public/logocrop.png'
import {motion} from 'framer-motion'

const MessageSent = () => {
  return(
    <div className={style.messagesent}>
    <div className={style.heading}>
      <h1> Sent </h1>
      <motion.div
      animate = {{rotate: 360}}
      transition = {{ duration: 2, yoyo: Infinity}} 
      >
      <img src={logo.src} />
      </motion.div>
    </div>
      <p> Your message has been successfully sent. Please hold on shortly for a feedback. Thank you!</p>
    </div>
    )
}

export default MessageSent