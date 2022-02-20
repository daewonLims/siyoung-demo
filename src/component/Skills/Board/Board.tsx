// import { userInfo } from 'os';
import React, { Component } from 'react';
import styles from './Board.module.scss';
import {Props} from '../../Nav/index';
import { BoardUpdate,BoardWrite, BoardForm } from './components/';
import {DumyBoard} from '../../Nav/index'


interface State {
  input:{
  };
  userInfo:{
    id:string,
    password:string,
    user_name:string,
  };
  //글쓰기 후 초기화
  boardWrite:{
    board_write_title:string;
    board_write_content:string;
  };
  DumyBoards:DumyBoard[],
  div_control:0|1|2,
  [key:string]:any;
}
class Board extends Component<Props, State>{
  constructor(props:Props) {
    super(props);
    // id password state 값 정의
    this.state ={
      input :{
      },
      userInfo:{
        id:this.props.userInfo.id,
        password:this.props.userInfo.password,
        user_name:this.props.userInfo.user_name,
      },
      boardWrite:{
        board_write_title:'',
        board_write_content:'',
      },
      //배열초기값
      DumyBoards:[],
      div_control:0,
      flag:{
        passwordCheckFlag:false,
      }
    }
  }
  onClick_Control = (flag:0|1|2) => {
      this.setState({
          div_control:flag
      })
      console.log("프롭스 유저네임 ::: "+ this.props.userInfo.user_name);
  }
  //인풋 벨류값 온체인지 함수
  onChangeBoardWrite = (value:string, flag:boolean) =>{
   if (flag) {
    // title
    this.setState({
      boardWrite:{
        board_write_title:value,
        board_write_content:this.state.boardWrite.board_write_content,
      }
    },()=>{console.log(this.state.boardWrite.board_write_title)})
   } else {
    //content
    this.setState({
      boardWrite:{
        board_write_title:this.state.boardWrite.board_write_title,
        board_write_content:value,
      }
    },()=>{console.log(this.state.boardWrite.board_write_content)})
   }
  }
  
  currentDate = () => {
    let newDate = new Date();
    let todayStr = newDate.toString();
    let year = newDate.getFullYear();
    const WEEKDAY = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let day = WEEKDAY[newDate.getDay()];
    let month = todayStr.slice(4, 7);
    let date = newDate.getDate();
    let hour = newDate.getHours();
    let hms = ''
    if ( hour <10 ) {
      hms = '0'+hour.toString() + ':'
    } else {
      hms = hour.toString()+':'
    }
    let min = newDate.getMinutes();
    if (min < 10) {
      hms += '0'+min.toString() + ':'
    } else {
      hms += min.toString()+ ':'
    }
    let sec = newDate.getSeconds();
    if (sec<10) {
      hms += '0' + sec.toString();
    } else {
      hms += sec.toString();
    }
    let currentDay = year.toString()+month+date.toString()+day+'_';
    let currentTime = currentDay + hms
    return currentTime
  }

  onClickBoardWriteButton= (e:any)=>{
    e.preventDefault();
    console.log('test')
    let leng = this.state.DumyBoards.length;
    let title = this.state.boardWrite.board_write_title;
    let content = this.state.boardWrite.board_write_content;
    let userName = this.props.userInfo.user_name;
    let writeDate = this.currentDate();
    
    let dumyBoardForm = this.state.DumyBoards;
    let dumpBoard:DumyBoard = {
      boardForm:{
        boardIndex:leng,
        boardTitle:title,
        boardContent:content,
        boardUserName:userName,
        boardWriteDate:writeDate,
      }
    }
    dumyBoardForm.push(dumpBoard);
    console.log('set before ::',dumyBoardForm)
    this.setState({
      DumyBoards:dumyBoardForm
    },()=>{
      console.log('after::',this.state.DumyBoards)
    })
  }
  render(){
    const {div_control} = this.state;
    
    return(
      <div>
        <div>
            <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(0)}>Board</div>
            <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(1)}>Write</div>
            <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(2)}>Update</div>
        </div>
        <div>
            {div_control===0 && (
                <BoardForm dumyBoards={this.state.DumyBoards} />
            )}
            {div_control===1 && (
                <BoardWrite userInfo={{
                  id:this.props.userInfo.id,
                  password:this.props.userInfo.password,
                  user_name:this.props.userInfo.user_name,
                }} boardWrite={
                  {
                  board_write_title:this.state.boardWrite.board_write_title,
                  board_write_content:this.state.boardWrite.board_write_content,
                }
              } onChangeBoardWrite={this.onChangeBoardWrite}
              onClickBoardWriteButton={this.onClickBoardWriteButton}
                />
            )}
            {div_control===2 && (
                <BoardUpdate userInfo={{
                  id:this.props.userInfo.id,
                  password:this.props.userInfo.password,
                  userName:this.props.userInfo.user_name,
                }} />
            )}
        </div>
    </div>
    );
  }
}

export default Board;