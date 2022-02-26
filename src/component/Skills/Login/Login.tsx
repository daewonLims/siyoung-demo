import React, { Component } from 'react';
import {Props} from '../../Nav/index';
// import './App.css';
interface State {
  input:{
    id:string,
    password:string,
  },
  userInfo:{
    id:string,
    password:string,
  }
}
class Login extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state={
      input:{
        id:'',
        password:'',
      },
      userInfo:{
        id:'',
        password:'',
      }
    }
  }
  
  /* id password state값 으로 정의 */
  // state = {
  //   input:{
  //     id:'',
  //     password:'',
  //   },
  //   userInfo:{
  //     id:'',
  //     password:'',
  //   }
  // }
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
    let result = userLoginEvent(this.state.input.id, this.state.input.password)
    if (result) {
      this.setState({
        userInfo:{
          id:this.state.input.id,
          password: this.state.input.password
        },
        input:{id:'',password:''}
      },()=>{
        document.getElementById('0nav_items_id')?.click();
      })
    }

  }
  appKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }
  render() {
    const { input } = this.state;
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
        { this.props.userInfo.id &&
         <h2>{this.props.userInfo.id}님 환영합니다.</h2> }

      </div>
    );
  }
}

export default Login;