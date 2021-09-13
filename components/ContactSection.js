import style from "../styles/ContactSection.module.scss";
import Heading from "./Heading";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import CircleDecoration from "./CircleDecoration";
import ScrollContainer from "./ScrollContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <>
      <div className={style.contactsection}>
        <Heading heading={"Contact Me"} />
        <div className={style.container}>
          <CircleDecoration />
          <p data-aos="fade-up" className={style.p}>
            I am open to job offers in Front End Development, WordPress
            Development and Content Creation for Websites and Blogs.
          </p>
          <p data-aos="fade-up" className={style.p}>
            You can reach me on any of the following channels and I will get
            back to you.
          </p>
          <div className={style.forms}>
            <ContactCard />
            <ContactForm />
          </div>
        </div>
      </div>
      <div className={style.scrollcontainer}>
        <ScrollContainer />
      </div>
    </>
  );
};

export default ContactSection;
