import style from '../styles/Menu.module.scss'

const Menu = ({onShow}) => {
  return(
    <div onClick={onShow} className={style.menu}>
      <div className={style.box}> </div>
      <div className={style.box}></div>
      <div className={style.box}> </div>
      <div className={style.box}> </div>
    </div>
    )
}

export default Menu