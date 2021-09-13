import Heading from "./Heading";
import style from "../styles/Portfolio.module.scss";
import { FaEye, FaGlobe, FaGithub } from "react-icons/fa";
import MyFirstPortFolio from '../public/portfolio.jpg'
import PaulRay from '../public/paulray.jpg'
import Grampro from '../public/grampro.jpg'
import Shop from '../public/shop.jpg'
import Blogr from '../public/blogr.jpg'
import { useState } from "react";
import { motion } from "framer-motion";
import CircleDecoration from "./CircleDecoration";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollContainer from "./ScrollContainer";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  const [details, setDetails] = useState(false);
  const [details1, setDetails1] = useState(false);
  const [details2, setDetails2] = useState(false);
  const [details3, setDetails3] = useState(false);
  const [details4, setDetails4] = useState(false);
  
  const showDetails = () => {
    setDetails(!details)
    setDetails3(false)
    setDetails1(false)
    setDetails2(false)
    setDetails4(false)
  }
  const showDetails1 = () => {
    setDetails1(!details1)
    setDetails(false)
    setDetails2(false)
    setDetails3(false)
    setDetails4(false)
  }
  const showDetails2 = () => {
    setDetails2(!details2)
    setDetails(false)
    setDetails1(false)
    setDetails3(false)
    setDetails4(false)
  }
  const showDetails3 = () => {
    setDetails3(!details3)
    setDetails(false)
    setDetails1(false)
    setDetails2(false)
    setDetails4(false)
  }
  const showDetails4 = () => {
    setDetails4(!details4)
    setDetails3(false)
    setDetails(false)
    setDetails1(false)
    setDetails2(false)
  }

  return (
    <div className={style.container} >
        <Heading className={style.heading} heading={"portfolio"} />
      <div className={style.list}>
        <div data-aos="fade-up" className={style.item}>
          <img src={MyFirstPortFolio.src} className='img' alt="project" />
          <FaEye onClick={showDetails} className={style.eye} />
          {details && <motion.div className={style.description}
          initial= {{opacity: 0}}
          animate= {{opacity: 1}} 
          >
            <h1>My First Portfolio</h1>
            <p>This is my first portfolio website. It contains details such as my skills, work portfolio, contact and contact form.</p>
            <div className={style.features}>
              <p>Built With HTML5, CSS3, JavaScript.</p>
              <p>Mobile Responsive.</p>
            </div>
            <div className={style.links} >
               <a href="https://chulocr8v.github.io" target="_blank" ><FaGlobe className={style.icon} /> </a>
               <a href="https://github.com/ChuloCr8v/chulocr8v.github.io" target="_blank" ><FaGithub className={style.icon} /> </a>
            </div>
          </motion.div>} 
        </div>
        
        <div data-aos="fade-up" className={style.item}>
          <img src={Grampro.src} className='img1' alt="project" />
          <FaEye onClick={showDetails1} className={style.eye} />
          {details1 && <motion.div className={style.description}
          initial= {{opacity: 0}}
          animate= {{opacity: 1}} 
          >
            <h1>Grampro</h1>
            <p>This is a Photo Bucket that allows uploading of pictures and preview of uploaded pictures. The uploaded pictures are stored with Google Firebase which acts as the backend.</p>
            <div className={style.features}>
              <p>Built With HTML5, Sass, React.js, Firebase and Firestore.</p>
              <p>Mobile Responsive.</p>
            </div>
             <div className={style.links} >
              <a href="https://grampro.netlify.app" target="_blank" ><FaGlobe className={style.icon} /> </a>
               <a href="https://github.com/ChuloCr8v/grampro" target="_blank" ><FaGithub className={style.icon} /> </a>
            </div>
          </motion.div>} 
        </div>
        
        <div data-aos="fade-up" className={style.item}>
          <FaEye onClick={showDetails2} className={style.eye} />
          <img src={PaulRay.src} className='img2' alt="project" />
          {details2 && <motion.div className={style.description}
          initial= {{opacity: 0}}
          animate= {{opacity: 1}} 
          >
            <h1>PaulRay Photography</h1>
            <p>This is a photography portfolio website designed to showcase the profile of a photographer. It contains details about the photographer such as skills, services, past works and contact details.</p>
            <div className={style.features}>
              <p>Built With HTML5, CSS3, and Javascript.</p>
              <p>Mobile Responsive.</p>
            </div>
             <div className={style.links} >
              <a href="https://chulocr8v.github.io/paul-ray.github.io/" target="_blank" ><FaGlobe className={style.icon} /> </a>
               <a href="https://github.com/ChuloCr8v/paul-ray.github.io" target="_blank" ><FaGithub className={style.icon} /> </a>
            </div>
          </motion.div>} 
        </div>
        
        <div data-aos="fade-up" className={style.item}>
          <FaEye onClick={showDetails4} className={style.eye} />
          <img src={Shop.src} className='img4' alt="project" />
          {details4 && <motion.div className={style.description}
          initial= {{opacity: 0}}
          animate= {{opacity: 1}} 
          >
            <h1>Shop 24Seven</h1>
            <p>This is template of an online store. It features only the landing page and no additional features.</p>
            <div className={style.features}>
              <p>Built With HTML5, CSS3, and Javascript.</p>
              <p>Mobile Responsive.</p>
            </div>
             <div className={style.links} >
              <a href="https://shop247.netlify.app/" target="_blank" ><FaGlobe className={style.icon} /> </a>
               <a href="https://github.com/ChuloCr8v/shop24seven.github.io" target="_blank" ><FaGithub className={style.icon} /> </a>
            </div>
          </motion.div>} 
        </div>
        
        <div data-aos="fade-up" className={style.item}>
          <img src={Blogr.src} className='img3' alt="project" />
          <FaEye onClick={showDetails3} className={style.eye} />
          {details3 && <motion.div className={style.description}
          initial= {{opacity: 0}}
          animate= {{opacity: 1}} 
          >
            <h1>Blogr Landing Page</h1>
            <p>This is a blogr website template design challenge which I got from front-end mentor.</p>
            <div className={style.features}>
              <p>Built With HTML5, CSS3, TailwindCss and JavaScript.</p>
              <p>Mobile Responsive.</p>
            </div>
             <div className={style.links} >
              <a href="https://chulocr8v.github.io/blogr-landing-page.github.io/" target="_blank" ><FaGlobe className={style.icon} /> </a>
               <a href="https://github.com/ChuloCr8v/blogr-landing-page.github.io" target="_blank" ><FaGithub className={style.icon} /> </a>
            </div>
          </motion.div>} 
        </div>
         <style jsx>
            {`
            .img {filter: blur(${details ? '5px' : 'none'})}
            .img1 {filter: blur(${details1 ? '5px' : 'none'})}
            .img2 {filter: blur(${details2 ? '5px' : 'none'})}
            .img3 {filter: blur(${details3 ? '5px' : 'none'})}
            .img4 {filter: blur(${details4 ? '5px' : 'none'})}
            `}
          </style>
      </div>
      <div className={style.scrollcontainer}>
        <ScrollContainer />
        <CircleDecoration />
      </div>
    </div>
  );
};

export default Portfolio;
