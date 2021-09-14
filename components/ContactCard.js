import style from "../styles/ContactCard.module.scss";
import Logo from "../public/logocrop.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-left" className={style.contactcard}>
      <div data-aos="fade-in" className={style.details}>
        <img src={Logo.src} />
        <div className={style.name}>
          <p> Nkematu </p>
          <p> Bonaventure </p>
          <h5>
            {" "}
            Front-End Developer. <span> WordPress Developer. </span>{" "}
            <span> Content Creator. </span>{" "}
          </h5>
          <div className={style.socialicons}> <a href="https://www.github.com/ChuloCr8v" target="_blank" rel="noopener noreferrer"><FaGithub className={style.icon} /> </a>
      <a href="https://www.twitter.com/ChuloCr8v" target="_blank" rel="noopener noreferrer"><FaTwitter className={style.icon} /></a>
      <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer"><FaLinkedin className={style.icon} /></a>
            
          </div>
        </div>
      </div>
      <div className={style.contact}>
        <span>
          <FaPhone className={style.phone} />
          <p> +2348138369977 </p>
        </span>
        <span>
          <FaEnvelope className={style.icon} />
          <p> Chulocr8v@gmail.com </p>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
