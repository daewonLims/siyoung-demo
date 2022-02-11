import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin  from "../Skills/Signin/Signin";
import Nav  from '../Nav/Nav' 
import Ex01 from '../Skills/Ex01'
import Join from "../Skills/Join/Join";
import Login from "component/Skills/Login";
import { Props, DumyUser } from "component/Nav";
interface State {
  userInfo:{
    id:string,
    password:string,
  },
  dumyData: DumyUser[],
  [key:string]:any;
}
class App extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state={
      userInfo:{
        id:'',
        password:''
      },
      dumyData:[],
    }
  }
  joinUser = (userData:{id:string, password:string, name:string, birth?:string}) => {
    if (userData.id.trim() === '' || userData.password.trim() === '' || userData.name.trim() === '' ) {
      return false;
    } else {
      let dumyData_dump = this.state.dumyData;
      let birth_check = userData.birth? userData.birth:''
      let dumyUserData = {
        user_id: userData.id,
        user_password: userData.password,
        user_name: userData.name,
        user_birth: birth_check
      }
      dumyData_dump.push(dumyUserData)
      this.setState({dumyData:dumyData_dump})
      
    }
  }

  user_check_validation = (id:string, password:string) => {
    let check_join = this.state.dumyData.length
    for (let i = 0; i <= check_join-1;i++){
      let data_id = this.state.dumyData[i].user_id
      let data_pw = this.state.dumyData[i].user_password
      if (id !== data_id) {
        console.log(i,'id false')
      } else {
        if ( password !== data_pw ) {
          console.log(i,'pw false')
        } else {
          // id pw true
          return true
        }
      };//if end
    };//for end
    return false;
  }

  loginUser = (id :string , password: string) => {
    let check_join = this.state.dumyData.length;
    console.log(check_join)
    if (check_join <1) {
      alert('회원가입 진행바람.')
      return false;
    } else {
      if (!id || !password) {
        return false;
      } else {
        let check_val = false;
        check_val= this.user_check_validation(id,password);
        console.log(check_val)
        if (!check_val) {
          alert('id와 비번을 다시 확인해주세요.');
          return false;
        } else {
          this.setState({ userInfo:{id:id, password:password} })
          return true;
        };//if end
      }
    };//if end
  }

  render(){
    console.log('app state::',this.state.userDumyData)
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
              }} userLoginEvent={this.loginUser} dumyData={this.state.dumyData} />} />
            <Route path="/Ex01" element={<Ex01 />} />
            <Route path="/Join" element={<Join userInfo={{
            id: "",
            password: "",
          }} joinUserEvent={this.joinUser} dumyData={this.state.dumyData}/>} />
          </Routes>
        </BrowserRouter>
    );
  };
}
export default App;