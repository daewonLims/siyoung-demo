// import { userInfo } from 'os';
import React, { Component } from 'react';
import styles from './Join.module.scss';
import {Props} from '../../Nav/index';

interface State {
  input:{
    id:string,
    password:string,
    checkPW:string,
    userName:string,
    userBirth:string,
  };
  userInfo:{
    id:string,
    password:string,
    userName:string,
    userBirth:string,
  };
  [key:string]:any;
}
class Join extends Component<Props, State>{
  constructor(props:Props) {
    super(props);
    // id password state 값 정의
    this.state ={
      input :{
        id: '',
        password:'',
        checkPW:'',
        userName:'',
        userBirth:'',
      },
      userInfo:{
        id:'',
        password:'',
        userName:'',
        userBirth:'',
      },
      flag:{
        passwordCheckFlag:false,
        signupCheckFlag:false,
      }
    }
  }
  //인풋 아이디 받기 - 인풋 change event
   inputIDChange=(e:any)=>{
     this.setState({
       input:{
          id:e.target.value,
          password:this.state.input.password,
          checkPW:this.state.input.checkPW,
          userBirth:this.state.input.userBirth,
          userName:this.state.input.userName
        }
     })
   } 

   //인풋 비번 받기 - 인풋 change event
   inputPWChange= (e:any) => {
     this.setState({
       input:{
          id:this.state.input.id,
          password:e.target.value,
          checkPW:this.state.input.checkPW,
          userBirth:this.state.input.userBirth,
          userName:this.state.input.userName
        }
     })
   }
   inputPWCheckChange= (e:any) => {
      let checkPW = e.target.value;
      let originPW = this.state.input.password;
      if ( checkPW !== originPW) {
        this.setState({
          input:{
            id:this.state.input.id,
            password:this.state.input.password,
            checkPW:e.target.value,
            userBirth:this.state.input.userBirth,
            userName:this.state.input.userName
          },
          flag:{passwordCheckFlag:false}
        })
      } else {
        this.setState({
          input:{
            id:this.state.input.id,
            password:this.state.input.password,
            checkPW:e.target.value,
            userBirth:this.state.input.userBirth,
            userName:this.state.input.userName
          },
          flag:{passwordCheckFlag:true}
        })
      }
  }
  //비번 중복확인
  overPWCheck = (inputPW?:string, inputPWCheck?:string) => {
    // console.log("들어오는 값 확인 ::"+ inputPWCheck)
    if (inputPW !==inputPWCheck) {
      alert("비번 두개 다르다.")
      this.setState({
        flag:{
          passwordCheckFlag:false,
        }
      })
    } else {
      //password check true
      this.setState({
        flag:{
          passwordCheckFlag:true,
        }
      })
    }
  }
  //이름 받기
  inputName=(e:any)=>{
    console.log(e.target.value)
    this.setState({
      input:{
        id:this.state.input.id,
        password:this.state.input.password,
        checkPW:this.state.input.checkPW,
        userName:e.target.value,
        userBirth:this.state.input.userBirth,
      }
    })
  }
  //생년월일 받기
  userBirth = (e:any) => {
    let birth:string = e.target.value;
    console.log('birth day::', birth)
    this.setState({
      input:{
        id:this.state.input.id,
        password:this.state.input.password,
        checkPW:this.state.input.checkPW,
        userBirth: birth,
        userName:this.state.input.userName,
      }
    })
  }
  
  //회원가입 버튼 클릭
  joinUser=()=>{
    console.log("인풋값 ::: ", this.state.input);
    //나중에 입풋값들 유효성 체크
    console.log("생년월일 인풋값 ::"+this.state.input.userBirth);
    console.log("아이디 인풋값 ::"+this.state.input.id);
    
    let validationCheck = this.allInput(this.state.input.id, this.state.input.password, this.state.input.checkPW
      ,this.state.input.userName, this.state.input.userBirth);
      console.log("올인풋 받아오는 값:::"+this.state.input.id+this.state.input.userName);
    if ( !validationCheck ) {
      // 유효성 체크 
      return false;
    } else {
      // 유효성 체크 정상
      this.setState({
        userInfo:{
          id:this.state.input.id,
          password:this.state.input.password,
          userBirth:this.state.input.userBirth,
          userName:this.state.input.userName,
        },
        input:{
          id:'',password:'',checkPW:'',userName:'',userBirth:''
        },
        flag:{
          passwordCheckFlag:false
        }
      }, ()=> {
        //setState는 함수의 가장 마지막에서만 사용할것 -> 나중에 찾아봐 마지막에 쓰는 이유
        console.log("유저인포 :::"+ this.state.input.id + this.state.userInfo.password 
        +this.state.userInfo.userName+ this.state.userInfo.userBirth);
      })
    }
    
  }
  //입력값 받기
  allInput=(inputID?:string, inputPW?:string, inputPWCheck?:string, inputName?:string, inputBrith?:string)=>{
    if(!inputID){
      alert("아이디 입력해라");
      return false;
    } else if(!inputPW){
      alert("비밀번호 입력해라");
      return false;
    } else if (inputPW !== inputPWCheck) {
      alert("비번확인 다시");
      return false;
    } else if (inputName?.trim() === '') {
      alert("이름 입력");
      return false;
    } else if (inputBrith?.trim() === '') {
      alert("생일 입력");
      return false;
    } else {
      return true;
    }
     
  }
  
  allInputCheckFunction = () => {
    const { id, password, checkPW, userName, userBirth } = this.state.input;
    let checkFlag = false;
    if ( id.trim() !== '' && password.trim() !== '' && checkPW.trim() !== '' && userName.trim() !== '' && userBirth.trim() !== '' ) {
      checkFlag = true;
    } else {
      checkFlag = false;
    }
    return checkFlag;
  }

  render(){
    const {input, flag} = this.state;
    let allInputCheck = this.allInputCheckFunction;

    return(
      <form action="">
        <div className={styles.container}>
          <div className={styles.title}>
          <h1>회원가입</h1>    
          </div>
          <div className={styles.form}>
            <div className={styles.input_box}>
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" placeholder="아이디임"
                  value={input.id}
                  onChange={this.inputIDChange} />
            </div>   
            <div className={styles.input_box}>
              <label htmlFor="">비밀번호</label>
              <input type="password" placeholder="비번임" id="password"
                  value={input.password} onChange={this.inputPWChange}/>  
            </div>   
            <div className={styles.input_box}>
              <label htmlFor=""></label>
              <input type="password" placeholder="한번 더 입력하자"
              onChange={this.inputPWCheckChange}
                  value={input.checkPW} />  
              <div>
                <span style={{color:flag.passwordCheckFlag?'green':'red'}}>
                {flag.passwordCheckFlag?'확인되었습니다':'비번 확인해주세요'}
                </span>    
              </div>
            </div>   
            <div className={styles.input_box}>
              <label htmlFor="userName">이름</label>
              <input type="text" placeholder="이름" id="userName"
                  value={input.userName} onChange={this.inputName}/>  
            </div>   
            <div className={styles.input_box}>
              <label htmlFor="userBirth">생년월일</label>
              <input type="date" id="userBirth" min="2000-01-01"
                 value={input.userBirth} onChange={this.userBirth}/>  
            </div>
            <span style={{color:allInputCheck()?'green':'red'}}>
              {allInputCheck()?"모든 입력값 확인되었습니다.":"입력값을 전부 입력하세요."}
              </span>   
            <button type="button" className={styles.join_button}
                onClick={this.joinUser}>회원가입 완료</button>
          </div>
          {/* { userInfo.id &&
          <h2>{userInfo.id}님 환영합니다.</h2> } */}
        </div>
      </form>
    );
  }
}

export default Join;