// import react from "react";
import { Component } from "react";
import { State,Props } from ".";
import {Link} from "react-router-dom";
import style from './Nav.module.scss';

class Nav extends Component<Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      menuToggle:false,
      currentPageIndex:0,
      menus:[
        { name: "Main", address: "/"}, 
        { name: "Login", address: "/Login"},
        // { name: "Ex01", address: "/Ex01"},
        { name: "Join", address: "/Join"},
        { name: "Board", address: "/Board"}
      ],     
      userInfo:{
        id:'',
        password:'',
      }
    };
    
  }
  useStateMenuToggle = (flag:boolean, idx) => {
    this.setState({menuToggle:flag, currentPageIndex:idx})
  }

  navItem = ( data, index ) => {
    const {name, address} = data; 
    return (
      <Link id={index+'nav_items_id'} key={index} to={`${address}`} className={style.navLink}
        aria-current={this.state.currentPageIndex===index?"page":undefined}
        onClick={() => this.useStateMenuToggle(false, index)}>
        {name}
      </Link>
    )
  }

  render () {
    const {menus} = this.state;
    const {userInfo } = this.props;
    
    return(
      <div className={style.nav}>
        <div className={style.nav_Links}>
          { menus?.map((data, index) => this.navItem(data, index))}
        </div>
        <div className={style.nav_login}>
          {userInfo.id.trim() !=='' && (
            <div>{userInfo.id + '님이 로그인중입니다.'}</div>
          )}
        </div>
      </div>
    )
  }
}

export default Nav;