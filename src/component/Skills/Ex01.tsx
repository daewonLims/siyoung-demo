// import { userInfo } from 'os';
import React, {Component} from 'react'

class Ex01 extends Component {

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
  //ID 입력
  inputIDChange=(e:any) =>{
    // const check = this.validationCheck(this.state.input.id, this.state.input.password);
    //여기 벨리데이션 체크함수에 넣겠다 저 값들을
    // if (check) {
      this.setState({
        input:{
          id:e.target.value,
          password:this.state.input.password
        }
      });
    // } else {

    // }
  }
  // //ID 입력 체크
  // validationCheck = (inputID?:string, inputPW?:string)=> {
  //   //ID check
  //   if (inputID){
  //     if (inputID!=='Siyoung') {
  //       alert('ID false')
  //       return false;
  //     }
  //   }
  //   //PW check
  //   if (inputPW){
  //     if (inputPW!=='1234') {
  //       alert('PW false')
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  //Login button Event
  click = () => {
    console.log("입력아이디:::", this.state.input);

  }
 render() {
  const {input} = this.state;
   return(
    <div>
      <h1>로그인 연습 페이지</h1>
      <div className="form_inner">
        <div>
          <input type="text" name="id" 
            placeholder="아이디" value={input.id} 
            onChange={this.inputIDChange} />
        </div>
        <div>
          <input type="text" name="password" 
            placeholder="패스워드" />
        </div>s
      </div>
      <button 
        onClick={this.click}>로그인</button>
    </div>
   );
 } 

}


export default Ex01;