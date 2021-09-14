import style from "./Layout.module.scss";
import MenuTab from "./MenuTab";
import MobileMenu from "./MobileMenu";
import logo from "../../public/logo.png";
import { useState, useEffect } from "react";
import CircleDecoration from '../../components/CircleDecoration'

const Layout = (props) => {
  const [bg, setBg] = useState(true);
  const [windows, setWin] = useState('')

  useEffect(() => {
    setWin(window.pageYOffset)
  }, [])

  let x = windows

  const changeHeaderBg = () => {
    let y = window.pageYOffset
    if (y > x){
      setBg(false)
    }  else {
      setBg(true)
    }  
    x = y
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBg);
    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
     };
  }, []);

  return (
    <div className={style.layout}>
      <div className="header1">
        {bg && <div className={style.header}>
          <div className={style.logo}>
            <img src={logo.src} alt='devchex logo' />
          </div>
          <MobileMenu className={style.mobilemenu} />
        </div>}
      </div>
      {bg && <MenuTab />} 
      <CircleDecoration />
      <style jsx>
        {`
        .header1 {
          position: fixed;
          width: 100%;
          background: ${bg ? "#232b34" : ""};
          transition: 0.9s ease;
          z-index: 999999;
        }
      `}
      </style>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
