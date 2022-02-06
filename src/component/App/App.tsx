import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin  from "../Skills/Signin/Signin";
import Nav  from '../Nav/Nav' 
import Ex01 from '../Skills/Ex01'
import Join from "../Skills/Join/Join";
import Login from "component/Skills/Login";
import { Props } from "component/Nav";
interface State {
  userInfo:{
    id:string,
    password:string,
  }
}
class App extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state={
      userInfo:{
        id:'',
        password:''
      }
    }
  }

  loginUser = (id :string , password: string) => {
    if (!id || !password) {
      return false;
    } else {
      this.setState({
        userInfo:{
          id:id,
          password:password
        }
      })
    }
  }


  render(){
    return (
      <BrowserRouter>
          <Nav userInfo={{
          id: this.state.userInfo.id,
          password: this.state.userInfo.password,
        }} />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/Login" 
              element={<Login userInfo={{
                id: "",
                password: ""
            }} userLoginEvent={this.loginUser} />} />
            <Route path="/Ex01" element={<Ex01 />} />
            <Route path="/Join" element={<Join userInfo={{
            id: "",
            password: "",
          }} />} />
          </Routes>
        </BrowserRouter>
    );
  };
}
export default App;