import style from "./About.module.scss";
import AboutMe from "../components/AboutMe";

const about = () => {
  return (
    <div className={style.aboutme}>
      <h1 className={style.heading}>
        {" "}
        Meet <span>Dev.Chex</span>
      </h1>
      <div className="about">
        <AboutMe />
      </div>
      <style jsx>
        {`
        
         .about {
           padding-top: 200px;
         }
        `}
      </style>
    </div>
  );
};

export default about;
