import style from './MenuTab.module.scss'
import MenuIcon from '../../components/Menu'
import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import logo from '../../public/logocrop.png'

const MenuTab = () => {
 
 const [showMenu, setShowMenu] = useState(false)
 
 const menuDisplay = () => {
  setShowMenu(!showMenu);
 }
 
  return(
    <div className={style.container}>
      {showMenu && <MobileMenu />} 
      <div className={style.menutab}>
        <div className={style.logo}>
          <img src={logo.src} alt="dev chex logo" />
        </div>
        {!showMenu && <MenuIcon onShow={menuDisplay} />} 
        {showMenu && <FaTimes onClick={() => setShowMenu(false)} className={style.icon} />} 
      </div>
    </div>
    )
}

export default MenuTab