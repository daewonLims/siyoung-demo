// import { render } from "@testing-library/react";
import React from "react";
import style from './Signin.module.scss'
// import { Button, Col, Input, Row } from "antd";
// import Greetings from '../Greetings/Greetings'
// import Counter from '../../Counter/Counter';
// import MyForm from "../../MyForm/MyForm";

class Signin extends React.Component {
  // constructor(props:any){
  //   super(props)
  //   this.state = {
  //     userInfo:{
  //       id:'',
  //       password:''
  //     }
  //   }
  // }
  //로그인 api를 칠수있도록 작업
  // const emailRef =useRef<Input>();
  // const passwordRef =useRef<Input>();
  //Script 공간
  

  render(){
    // const { userInfo } = this.state;
    return (
      <div className={style.container}>
          {/* <Greetings name="Hello" onClick={onClick} />//함수형 컴포넌트를 타입스크립트로 작성하는 기본적인 방법
          <Counter /> //useState를 사용한 이벤트 관리
        <MyForm onSubmit={onSubmit} />//인풋 상태관리하기 */}
        <p className={style.test}>HAPPY HOLIDAY(signin.tsx)</p>
          <div style={{'flex':1,'textAlign':'end','marginRight':'10px'}}>
          {/* {userInfo.id && userInfo.id+'님 로그인'} */}
          </div>
          <div style={{'flex':1,'textAlign':'end','marginRight':'10px'}}>
              비밀번호
          </div>
        </div>
    );
  }
}


export default Signin;