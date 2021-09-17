import Heading from "./Heading";
import style from "../styles/Portfolio.module.scss";
import { FaEye, FaGlobe, FaGithub } from "react-icons/fa";
import Image from 'next/image'
import myfirstportfolio from '../public/portfolio.jpg'
import grampro from '../public/grampro.jpg'
import shop from '../public/shop.jpg'
import blogr from '../public/blogr.jpg'
import { useState } from "react";
import { motion } from "framer-motion";
import CircleDecoration from "./CircleDecoration";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollContainer from "./ScrollContainer";
import Projects from './Projects'

const Portfolio = () => {
  
  const [showDetails, setShowDetails] = useState(false)

  const details = (index) => {
     if(showDetails === index){
      return setShowDetails(null)
     } 
    setShowDetails(index) 
  }

  return (
    <div className={style.container}>
    <Heading heading={"My Portfolio"} />
      <div className={style.list}>
        {Projects.map((project, index) => (
        <div data-aos="fade-up" key={index} id="item" className={style.item}>
        <Image src={project.img} height={370} width={600} alt="devchex projects" className={` ${showDetails === index && style.blur }`} />
        <FaEye onClick={() => details(index)} className={style.eye} />
        {showDetails === index && <motion.div className={style.details}
        animate ={{ 
        y: [-20, 20, -10, 10, 0], 
        filter: [
        'hue-rotate(360deg) contrast(100%)', 
        'hue-rotate(180deg) contrast(200%)', 
        'hue-rotate(90deg) contrast(300%)', 
        'hue-rotate(0) contrast(100%)'
        ]
          
        }} 
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <ul className={style.features}>
            <p>{project.featureOne}</p>
            <p>{project.featureTwo}</p>
          </ul>
          <div className={style.links}>
            <a href={project.demo}><FaGlobe className={style.icon} /></a>
            <a href={project.github}><FaGithub className={style.icon} /></a>
          </div>
        </motion.div>} 
        </div>
        ))} 
      </div>
      <div className={style.scrollcontainer}>
        <CircleDecoration />
      </div>
    </div>
  );
};

export default Portfolio;


