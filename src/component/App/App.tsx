import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home  from "../Skills/Home/Home";
import Signin  from "../Skills/Signin/Signin";
import Nav  from '../Nav/Nav' 
import Ex01 from '../Skills/Ex01'
import Join from "../Skills/Join/Join";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <Nav userInfo={{
          id: "",
          password: "",
          userName: "",
          userBirth: ""
        }} />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/Login" element={<Home />} />
            <Route path="/Ex01" element={<Ex01 />} />
            <Route path="/Join" element={<Join userInfo={{
            id: "",
            password: "",
            userName: "",
            userBirth: ""
          }} />} />
          </Routes>
        </BrowserRouter>
    );
  };
}
export default App;