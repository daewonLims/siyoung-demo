// import { userInfo } from 'os';
import React, { Component } from 'react';
import styles from './Board.module.scss';
import {Props} from '../../Nav/index';
import { BoardUpdate,BoardWrite, BoardForm } from './components/';
import {DumyBoard} from '../../Nav/index';

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
  page_control:[],
  paging:{
    limit:number;
    page:number;
    offset:any;
  },
  numPages:number[],
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
      DumyBoards:[{
        boardForm:{
          boardIndex:0,
          boardTitle:'1번',
          boardContent:'1내용',
          boardUserName:'user1',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:1,
          boardTitle:'2번',
          boardContent:'2내용',
          boardUserName:'user2',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:2,
          boardTitle:'3번',
          boardContent:'3내용',
          boardUserName:'user3',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:3,
          boardTitle:'4번',
          boardContent:'4내용',
          boardUserName:'user4',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:4,
          boardTitle:'5번',
          boardContent:'5내용',
          boardUserName:'user5',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:5,
          boardTitle:'6번',
          boardContent:'6내용',
          boardUserName:'user6',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:6,
          boardTitle:'7번',
          boardContent:'7내용',
          boardUserName:'user7',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:7,
          boardTitle:'8번',
          boardContent:'8내용',
          boardUserName:'user8',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:8,
          boardTitle:'9번',
          boardContent:'9내용',
          boardUserName:'user9',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:9,
          boardTitle:'10번',
          boardContent:'10내용',
          boardUserName:'user10',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:10,
          boardTitle:'11번',
          boardContent:'11내용',
          boardUserName:'user11',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:11,
          boardTitle:'12번',
          boardContent:'12내용',
          boardUserName:'user12',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:12,
          boardTitle:'13번',
          boardContent:'13내용',
          boardUserName:'user13',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:13,
          boardTitle:'14번',
          boardContent:'14내용',
          boardUserName:'user14',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:14,
          boardTitle:'15번',
          boardContent:'15내용',
          boardUserName:'user15',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:15,
          boardTitle:'16번',
          boardContent:'16내용',
          boardUserName:'user16',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:16,
          boardTitle:'17번',
          boardContent:'17내용',
          boardUserName:'user17',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:17,
          boardTitle:'18번',
          boardContent:'18내용',
          boardUserName:'user18',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:18,
          boardTitle:'19번',
          boardContent:'19내용',
          boardUserName:'user19',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:19,
          boardTitle:'20번',
          boardContent:'20내용',
          boardUserName:'user20',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:20,
          boardTitle:'21번',
          boardContent:'21내용',
          boardUserName:'user21',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:21,
          boardTitle:'22번',
          boardContent:'22내용',
          boardUserName:'user22',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:22,
          boardTitle:'23번',
          boardContent:'23내용',
          boardUserName:'user23',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:23,
          boardTitle:'24번',
          boardContent:'24내용',
          boardUserName:'user24',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:24,
          boardTitle:'25번',
          boardContent:'25내용',
          boardUserName:'user25',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:25,
          boardTitle:'26번',
          boardContent:'26내용',
          boardUserName:'user26',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:26,
          boardTitle:'27번',
          boardContent:'27내용',
          boardUserName:'user27',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:27,
          boardTitle:'28번',
          boardContent:'28내용',
          boardUserName:'user28',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:28,
          boardTitle:'29번',
          boardContent:'29내용',
          boardUserName:'user29',
          boardWriteDate:'',
        },
      },
      {
        boardForm:{
          boardIndex:29,
          boardTitle:'30번',
          boardContent:'30내용',
          boardUserName:'user30',
          boardWriteDate:'',
        },
      },
    ],
      div_control:0,
      page_control:[],
      paging:{
        limit:10,
        page:1,
        offset:0,
      },
      numPages:[],
    }
  }

  onClick_Control = (flag:0|1|2) => {
    const {userInfo} = this.props;
    console.log("프롭스 유저네임 ::: "+ this.props.userInfo.user_name);

    if (userInfo.id !== '') {
      if (flag===1) {
        this.setState({
          boardWrite: {
            board_write_title:'',
            board_write_content:''
          }
        })
      }
      this.setState({
        div_control:flag
      }, () => {
        if (flag===1) {
          document.getElementById('boardWriteTitle')?.focus();
        }
      })
    } else {
      alert('먼저 로그인을 해주세요.')
      document.getElementById('1nav_items_id')?.click();
    }
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
    let date = newDate.getDate()<10? `0${newDate.getDate()}`:`${newDate.getDate()}`;
    let hour = String(newDate.getHours()).padStart(2,"0");
    let min = String(newDate.getMinutes()).padStart(2,"0");
    let sec = String(newDate.getSeconds()).padStart(2,"0");
    let hms = `${hour}:${min}:${sec}`
    let currentDay = year.toString()+month+date.toString()+'_'+day+'_';
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
      DumyBoards:dumyBoardForm,
      div_control:0
    },()=>{
      console.log('after::',this.state.DumyBoards)
      //글 추가할 경우 후처리로 paging 변수 업데이트
      this.pagingStateFunction();
      this.setState({
        boardWrite:{
          board_write_title:'',
          board_write_content:''
        },
      })
    })
  }

  //게시글 수정의 글수정 버튼
  onClcikBoardUpdateButton= (e:any)=>{
    e.preventDefault();
    let dumyBoardUpdate = this.state.dumyBoardUpdate;
    let dumyBoardForm = this.state.DumyBoards;
    
    let dumyBoardFormCopy = dumyBoardForm.filter((dumpValue, i)=>{
      if ( dumyBoardUpdate.boardIndex === i ) {
        dumpValue.boardForm.boardIndex = dumyBoardUpdate.boardIndex;
        dumpValue.boardForm.boardTitle = dumyBoardUpdate.boardTitle;
        dumpValue.boardForm.boardContent = dumyBoardUpdate.boardContent;
        dumpValue.boardForm.boardUserName = dumyBoardUpdate.boardUserName;
        dumpValue.boardForm.boardWriteDate = this.currentDate();
      }
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

  //page Navi Control
  setPagiNavState = (limit, page) => {
    let offset_dump = ( page - 1 ) * limit;
    this.setState({
      paging:{
        limit:limit,
        page:page,
        offset:offset_dump
      }
    });
  }

  componentDidMount() {
    this.pagingStateFunction();
  }

  //paging 변수 업데이트
  pagingStateFunction = () => {
    let limit = this.state.paging.limit;
    let total = this.state.DumyBoards.length;
    let numPages = Math.ceil(total/limit);
    let arr = Array(numPages).fill(0);
    this.setState({
      numPages:arr
    });
  }

  render(){
    const {div_control, DumyBoards,paging,numPages } = this.state;
    
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
                <BoardForm dumyBoards={DumyBoards}
                paging = {paging}
                numPageNavi={numPages}
                last={numPages.length}
                setPagiNavState = {this.setPagiNavState}
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