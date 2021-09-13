import style from '../styles/AboutMe.module.scss' 
import Heading from './Heading'
import CircleDecoration from './CircleDecoration'
import ScrollContainer from './ScrollContainer'
import {FaPalette, FaTachometerAlt, FaPenNib, FaLightbulb} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const AboutMe = () => {
  
   useEffect(() => {
    Aos.init({duration: 1500});
  })
  
  return(
    <>
    <div className={style.aboutme}>
      <CircleDecoration />
      <Heading heading={"About Me"} />
      <div className={style.description}>
        
         <p data-aos="fade-up"> 
          I am a front-end developer currently working with <span className={style.one}>JavaScript</span>, <span>React.js</span> and <span  className={style.three}>Next.js </span>. I am an aspiring full-stack developer with interest in Nodejs and Python. I am <span className={style.four}>Dedicated</span> to Learning, open to opportunities and always willing to take up a <span className={style.two}>challenge</span>. I am passionate about <span>writing</span> as much as I am about building things and designing concepts. I am always <span  className={style.one}>willing to learn</span> new concepts and can <span className={style.three}>fit</span> into any environment. 
         </p>

         <p data-aos="fade-up">
          I am Nkematu Bonaventure. Besides my being passionate about writing, I have always had a flair for designs and building stuffs. And then I thought, where else to better implement these skills if not here. Now, I am interested in helping individuals and companies proffer solutions to their online business needs.
        </p>
        
      </div>
      <div data-aos="fade-up" className={style.list}>
        <div className={style.item}>
          <FaPalette className={style.icon} />
          <h3>Design Enthusiast</h3>
          <p>I have keen eyes for simple and powerful designs, and fancy user interfaces. </p>
        </div>
             <div className={style.item}>
              <FaTachometerAlt className={style.icon} />
              <h3>Fast Learner</h3>
              <p>I can get the details with just a few explanations. You won't have to break into my brains to make me understand. </p>
        </div>
        <div className={style.item}>
          <FaPenNib className={style.icon} />
          <h3>Word Smith</h3>
          <p> I have the perfect contents to help your business reach out to your intended clients. I have worked with over 150 clients and created over 500 contents with my total word count ranging into 100s of thousands.</p>
        </div>
        <div className={style.item}>
          <FaLightbulb className={style.icon} />
          <h3>Creative</h3>
          <p>I possess the ability to critically analyze concepts while turning them into creative outputs. </p>
        </div>
      </div>
      <div className={style.scrollcontainer}>
        <ScrollContainer />
      </div> 

    </div>
    </>
    )
}

export default AboutMe