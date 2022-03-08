import React, { Component } from 'react';
import {Props} from '../../Nav/index';
import style from './Login.module.scss';
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
  
  componentDidMount = () => {
    document.getElementById('id')?.focus();
  }
  render() {
    const { input } = this.state;
    const { appClick, appKeyPress, inputIDChange, inputPWChange } = this;
    return (
      <div className={style.login_container}>
          <div className={style.login_title}>
            <h1>로 그 인</h1>    
          </div>
          <div className={style.login_inputID}>
            <label htmlFor='id'>{'아이디'}</label>
            <input type="text" id='id' name="id" placeholder="아이디" defaultValue={input.id} onChange={inputIDChange} />
          </div>
          <div className={style.login_inputPW}>
            <label htmlFor='password'>{'비밀번호'}</label>
            <input type="password" id='password'
              name="password"
              placeholder="비밀번호"
              defaultValue={input.password}
              onChange={inputPWChange}
              onKeyPress={appKeyPress}
            />
          </div>
          <div className={style.login_buttonWrap}>
            <button className={style.login_button} onClick={appClick}>로그인</button>
          </div>
      </div>
    );
  }
}

export default Login;