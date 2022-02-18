// import react from "react";
import { Component } from "react";
import { State,Props } from ".";
import {Link} from "react-router-dom";

class Nav extends Component<Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      menuToggle:false,
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
  useStateMenuToggle = (flag:boolean) => {
    this.setState({menuToggle:flag})
  }

  

  navItem = ( data, index ) => {
    const {name, address} = data; 
    return (
      <Link id={index+'nav_items_id'} key={index} to={`${address}`} className="menu__item" 
        onClick={() => this.useStateMenuToggle(false)}>
        {name}
      </Link>
    )
  }

  render () {
    const {menus} = this.state;
    const {userInfo } = this.props;
    return(
      <div className="menu__list">
        { menus?.map((data, index) => this.navItem(data, index))
        }
        {userInfo.id.trim() !=='' && (
          <div>{userInfo.id + '님이 로그인중입니다.'}</div>
        )}
        <div></div>
      </div>
    )
  }
}

export default Nav;