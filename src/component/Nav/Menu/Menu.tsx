import Nav from '../Nav';
import style from './Menu.module.scss'


const Menu=() =>{
  <Nav userInfo={{
    id: '',
    password: '',
    userName: '',
    userBirth: ''
  }}/>
  return(
    <div className={style.menu}>메뉴</div>
  )
}

export default Menu