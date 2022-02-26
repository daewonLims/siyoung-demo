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
  boardUpdate:{
    board_update_title:string;
    board_update_content:string;
  };
  dumyBoardUpdate:{
    boardIndex:number;
    boardTitle:string;
    boardContent:string;
    boardUserName:string;
    boardWriteDate:string;
  },
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
      boardUpdate:{
        board_update_title:'',
        board_update_content:'',
      },
      dumyBoardUpdate:{
        boardIndex:0,
        boardTitle:'',
        boardContent:'',
        boardUserName:'',
        boardWriteDate:'',
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
    },()=>{
      console.log(this.state.boardWrite.board_write_content);
    })
   }
  }
  //업데이트에서 넘어온 데이터
  onChangeBoardUpdate = (value: string, flag:boolean ) => {
    if(flag){
      //title
      this.setState({
          dumyBoardUpdate:{
            boardIndex:this.state.dumyBoardUpdate.boardIndex,
            boardTitle:value,
            boardContent:this.state.dumyBoardUpdate.boardContent,
            boardUserName:this.state.dumyBoardUpdate.boardUserName,
            boardWriteDate:this.state.dumyBoardUpdate.boardWriteDate,
        }
      }, ()=>{console.log(this.state.dumyBoardUpdate.boardTitle)})
    } else {
      //content
      this.setState({
        dumyBoardUpdate:{
          boardIndex:this.state.dumyBoardUpdate.boardIndex,
          boardTitle:this.state.dumyBoardUpdate.boardTitle,
          boardContent:value,
          boardUserName:this.state.dumyBoardUpdate.boardUserName,
          boardWriteDate:this.state.dumyBoardUpdate.boardWriteDate,
      }
     }, ()=>{console.log(this.state.dumyBoardUpdate.boardContent)})
    }
  }
  // 값 받아오기
  currentDate = () => {
    let newDate = new Date();
    let todayStr = newDate.toString();
    let year = newDate.getFullYear();
    const WEEKDAY = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let day = WEEKDAY[newDate.getDay()];
    let month = todayStr.slice(4, 7);
    let date = newDate.getDate();
    let hour = String(newDate.getHours()).padStart(2,"0");
    // let hms = ''
    // if ( hour <10 ) {
    //   hms = '0'+hour.toString() + ':'
    // } else {
    //   hms = hour.toString()+':'
    // }
    let min = String(newDate.getMinutes()).padStart(2,"0");
    // if (min < 10) {
    //   hms += '0'+min.toString() + ':'
    // } else {
    //   hms += min.toString()+ ':'
    // }
    let sec = String(newDate.getSeconds()).padStart(2,"0");
    // if (sec<10) {
    //   hms += '0' + sec.toString();
    // } else {
    //   hms += sec.toString();
    // }
    let hms = `${hour}:${min}:${sec}`
    let currentDay = year.toString()+month+date.toString()+day+'_';
    let currentTime = currentDay + hms
    return currentTime
  }

  //보더 폼에서 수정하기 클릭  
  onClickBoardFormUpdateButton=(i, board) => {
    // e.preventDefault();//기본기능 막기
    console.log("i:::", i);
    console.log("board.boardForm::: ", board.boardIndex);
    let boardIndex =board.boardIndex;
    let boardTitle =board.boardTitle;
    let boardContent =board.boardContent;
    let boardUserName =board.boardUserName;
    let boardWriteDate =board.boardWriteDate;
    
    let dumyBoardForm = this.state.DumyBoards;
    // let dumyBoardFormBoardDate =[];
    // dumyBoardFormBoardDate = 
    console.log("폼에서 받은 폼들의 값.::",dumyBoardForm);

    this.setState({
      div_control:2,
      dumyBoardUpdate:{
        boardIndex:boardIndex,
        boardTitle:boardTitle,
        boardContent:boardContent,
        boardUserName:boardUserName,
        boardWriteDate:boardWriteDate,
      }
    })
  }
  // 게시글쓰기 페이지의 버튼 클릭 이벤트
  onClickBoardWriteButton= (e:any)=>{
    e.preventDefault();
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
      this.setState({
        boardWrite:{
          board_write_title:'',
          board_write_content:''
        }
      })
    })
  }
  //게시글 수정의 글수정 버튼
  onClcikBoardUpdateButton= (e:any)=>{
    e.preventDefault();
    //값을 가져온 배열의 렝쓰와 값을 받은 변수가 필요하다
    // dumyBoardUpdate 여기에 업데이트와 타이틀의 벨류값이 저장되어있다
    // DumyBoards 여기에 보더쓰기에서 받은 타이틀 컨텐츠 넣기(보더 index에) 
    let dumyBoardUpdate = this.state.dumyBoardUpdate;
    console.log(dumyBoardUpdate.boardIndex); //보더 업데이트에서 넣은 값의 인덱스
    let dumyBoardForm = this.state.DumyBoards;
    console.log(dumyBoardForm.length);//기존에 있던 배열의 총 길이
    //BoardUpdate에 보더 폼에서 정해진 이값들을 기존 배열의 값과 바꿔주자
    let boardIndex= dumyBoardUpdate.boardIndex; //보더폼에서 보더 업데이트로 넘긴 인덱스
    let boardTitle= dumyBoardUpdate.boardTitle; //온체인지로 바뀐 스테이트 타이틀
    let boardContent= dumyBoardUpdate.boardContent; //온체인지로 바뀐 스테이트 컨텐츠
    let boardUserName= dumyBoardUpdate.boardUserName; //어차피 유저이름 공유
    let boardWriteDate=  this.currentDate(); //시간을 바꿔줘
    console.log("최종 set할 변수 ::: ",boardIndex, boardTitle, boardContent, boardUserName, boardWriteDate)

    let dumpBoard:DumyBoard = {
      boardForm:{
        boardIndex:boardIndex,
        boardTitle:boardTitle,
        boardContent:boardContent,
        boardUserName:boardUserName,
        boardWriteDate:boardWriteDate,
      }
    }

    //i=0 이고 기존있던 배열의 렝스만큼 i값을 증가 시켜 증가 시키다가 보더 업데이트에서 넣은 인덱스 값과 보더렝스 값이 같아지면 셑
    for(let i=0; i<=dumyBoardForm.length-1; i++){
      console.log(dumyBoardForm[i]);
      if(dumyBoardUpdate.boardIndex == i ){
        console.log("같은 값이 나왔다.",i)
         dumyBoardForm.splice(dumyBoardUpdate.boardIndex, 1, dumpBoard);//보더 업데이트의 인덱스의 데이터 하나삭제하고 다시 변경값 추가
         this.setState({
          DumyBoards:dumyBoardForm
         })
      }
    }
    console.log("함수 진행 후 결과1 :::",dumyBoardForm);
    console.log("함수 진행 후 결과2 :::",this.state.DumyBoards);
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
                <BoardForm dumyBoards={this.state.DumyBoards}
                onClickBoardFormUpdateButton={this.onClickBoardFormUpdateButton} />
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
                <BoardUpdate dumyBoardUpdate={{
              boardIndex: this.state.dumyBoardUpdate.boardIndex,
              boardTitle: this.state.dumyBoardUpdate.boardTitle,
              boardContent: this.state.dumyBoardUpdate.boardContent,
              boardUserName: this.state.dumyBoardUpdate.boardUserName,
              boardWriteDate: this.state.dumyBoardUpdate.boardWriteDate,
            }} onChangeBoardUpdate={this.onChangeBoardUpdate}
            onClcikBoardUpdateButton={this.onClcikBoardUpdateButton}
             boardUpdate={{
               board_update_title:this.state.dumyBoardUpdate.boardTitle,
               board_update_content:this.state.dumyBoardUpdate.boardContent,
              }}
               />
            )}
        </div>
    </div>
    );
  }
}

export default Board;