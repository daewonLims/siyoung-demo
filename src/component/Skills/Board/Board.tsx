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
    let year = newDate.getFullYear();
    const WEEKDAY = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let day = WEEKDAY[newDate.getDay()];
    let month = newDate.getMonth()<10? `0${newDate.getMonth()+1}`:`${newDate.getMonth()+1}`
    let date = newDate.getDate();
    let hour = String(newDate.getHours()).padStart(2,"0");
    let min = String(newDate.getMinutes()).padStart(2,"0");
    let sec = String(newDate.getSeconds()).padStart(2,"0");
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
        },
        div_control:0
      })
    })
  }
  //게시글 수정의 글수정 버튼
  onClcikBoardUpdateButton= (e:any)=>{
    e.preventDefault();
    let dumyBoardUpdate = this.state.dumyBoardUpdate;
    let dumyBoardForm = this.state.DumyBoards;
    
    let dumyBoardFormCopy = dumyBoardForm.filter((dumpValue, i)=>{
      console.log(dumyBoardUpdate)
      if ( dumyBoardUpdate.boardIndex === i ) {
        dumpValue.boardForm.boardIndex = dumyBoardUpdate.boardIndex;
        dumpValue.boardForm.boardTitle = dumyBoardUpdate.boardTitle;
        dumpValue.boardForm.boardContent = dumyBoardUpdate.boardContent;
        dumpValue.boardForm.boardUserName = dumyBoardUpdate.boardUserName;
        dumpValue.boardForm.boardWriteDate = this.currentDate();
      }
      console.log(dumpValue)
      return dumpValue
    })
    console.log('더미 보드 폼 생성 ::',dumyBoardFormCopy)
    this.setState({
      DumyBoards:dumyBoardFormCopy,
      dumyBoardUpdate:{
        boardIndex:0,
        boardTitle:'',
        boardContent:'',
        boardUserName:'',
        boardWriteDate:''
      },
      div_control:0
    });
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
            {/* <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(2)}>Update</div> */}
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