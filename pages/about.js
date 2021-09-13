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
          @media (min-width: 788px) {
            .about {
              padding: 400px 0;
            }

            h1 {
              padding-top: 80px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default about;
