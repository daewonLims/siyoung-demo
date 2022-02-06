// import react from "react";
import { Component } from "react";
import { State,Props } from ".";
// import style from "../Nav/Nav.module.scss"
// import {  BrowserRouter as Router } from "react-router-dom";
import NavItem from "./navItem";

class Nav extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      menuToggle:false,
      menus:[
        { name: "Main", address: "/"}, 
        { name: "Home", address: "/Home"},
        { name: "Ex01", address: "/Ex01"},
        { name: "Join", address: "/Join"}
      ]
    }
  }
  useStateMenuToggle = (flag:boolean) => {
    this.setState({menuToggle:flag})
  }
  render () {
    const {menus} = this.state;
    return(
      <div className="menu__list">
        {/* {userId && userId+'님 로그인중...'} */}
        { menus?.map((data) => (
          <NavItem
            data={data}
            key={data.address}
            offNav={() => this.useStateMenuToggle(false)}
          />
          ))}
      </div>
    )
  }
}

export default Nav;