import React, { Component } from 'react';
import {Props} from '../../Nav/index';
// import './App.css';

class Login extends Component<Props> {
  constructor(props:Props){
    super(props)
  }
  
  /* id password state값 으로 정의 */
  state = {
    input:{
      id:'',
      password:'',
    },
    userInfo:{
      id:'',
      password:'',
    }
  }
  /* input value 변경 ==> onChange */
  inputIDChange = (e:any) => {
    this.setState({
      input:{
        id:e.target.value,
        password:this.state.input.password
      }
    });
  }
  inputPWChange = (e:any) => {
    this.setState({
      input:{
        id:this.state.input.id,
        password:e.target.value
      }
    });
  }
  /* 로그인 버튼 클릭 ==> onClick */
  appClick = () => {
    const { userLoginEvent } = this.props;
    // let text = e.target.value
    console.log('input::',this.state.input)
    this.setState({
      userInfo:{
        id:this.state.input.id,
        password: this.state.input.password
      },
      input:{id:'',password:''}
    },()=>{
      console.log(`id는 : ${this.state.userInfo.id}\npw는 : ${this.state.userInfo.password}`);
      // document.getElementById('loginForm')?.setAttribute('hidden','true')
      //로그인 후 콜백으로 props 업데이트해서 정보 넘겨주기 - 1
      userLoginEvent(this.state.userInfo.id, this.state.userInfo.password)
    })
    
  }
  appKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }
  render() {
    const { userInfo, input } = this.state;
    const { appClick, appKeyPress, inputIDChange, inputPWChange } = this;
    return (
      <div className="App">
        <header className="App-header" id="loginForm">
          <input type="text" name="id" placeholder="아이디" defaultValue={input.id} onChange={inputIDChange} />
          <input type="password"
            name="password"
            placeholder="비밀번호"
            defaultValue={input.password}
            onChange={inputPWChange}
            onKeyPress={appKeyPress}
          />
          <button onClick={appClick}>로그인</button>
        </header>
        { userInfo.id &&
         <h2>{userInfo.id}님 환영합니다.</h2> }

      </div>
    );
  }
}

export default Login;