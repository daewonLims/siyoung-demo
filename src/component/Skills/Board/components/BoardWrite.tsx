import React from "react"

type BoardProps = {
    userInfo:{
      id:string,
      password:string,
      user_name:string,
    };
    boardWrite:BoardWriteState,
    onChangeBoardWrite:Function,
    onClickBoardWriteButton:Function,
  };

interface BoardWriteState {
    board_write_title:string;
    board_write_content:string;
}

export const BoardWrite: React.FC<BoardProps> = ({userInfo, boardWrite,onChangeBoardWrite,onClickBoardWriteButton}) => (

<div>
    {/* 글쓰기 구현 */}
    {/* <form action="" > */}
      <div><input id="boardWriteTitle" type="text" placeholder="제목을 입력해주세요"
          value={boardWrite.board_write_title}
          onChange={(e)=>{
            let value = e.target.value;
            onChangeBoardWrite(value, true)
          }} /></div>
      <div><input id="boardWriteContent" type="text" placeholder="내용을 입력하세요." 
          value={boardWrite.board_write_content} 
          onChange={(e)=>{
            let value = e.target.value;
            onChangeBoardWrite(value, false)
          }}/></div>
      <div> <span>Id :</span> <span>{userInfo.id}</span> </div>
      <div><span>이름 :</span> <span>{userInfo.user_name} </span></div>
      <button type="button" onClick={(e)=>onClickBoardWriteButton(e)}> 올 리 기</button>
    {/* </form> */}
  </div>
);

BoardWrite.defaultProps = {
  
};

export default BoardWrite;