import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import style from './../styles/SocialIcons.module.scss'
import {motion} from 'framer-motion'

const SocialIcons = () => {
  return(
    <motion.div className={style.socialicons}
      initial = {{ x: 100, opacity: 0}}
      animate = {{x: 0, opacity: 1}}
      transition = {{delay: 5, type: 'spring', stiffness:50}}
    >
      <a href="https://www.github.com/ChuloCr8v" target="_blank" rel="noopener noreferrer"><FaGithub className={style.icon} /> </a>
      <a href="https://www.twitter.com/ChuloCr8v" target="_blank" rel="noopener noreferrer"><FaTwitter className={style.icon} /></a>
      <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer"><FaLinkedin className={style.icon} /></a>
    </motion.div>
    )
}

export default SocialIcons