import React from "react"
import style from '../Board.module.scss'

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

export const BoardWrite: React.FC<BoardProps> = ({userInfo, boardWrite,onChangeBoardWrite,onClickBoardWriteButton}) => {
  
  return(

  <div className={style.boardWrite}>
      {/* 글쓰기 구현 */}
        <div className={style.titleBox}>
          <label htmlFor="boardWriteTitle">{`Title`}</label>
          <input id="boardWriteTitle" type="text" 
            placeholder="제목을 입력해주세요"
            value={boardWrite.board_write_title}
            onChange={(e)=>{
              let value = e.target.value;
              onChangeBoardWrite(value, true)
            }} /></div>
        <div className={style.contentBox}>
          <label htmlFor="boardWriteContent">{`Content`}</label>
          <input id="boardWriteContent" type="text" placeholder="내용을 입력하세요." 
            value={boardWrite.board_write_content} 
            onChange={(e)=>{
              let value = e.target.value;
              onChangeBoardWrite(value, false)
            }}/></div>
        <div className={style.infoBox}>
          <label>{`Writer ID`}</label>
          <input id="boardWriterID" type="text" readOnly
          value={userInfo.id}></input>
        </div>
        <div className={style.infoBox}>
          <label>{`Writer Name`}</label>
          <input id="boardWriterName" type="text" readOnly
          value={userInfo.user_name}></input>
        </div>
        <div className={style.boardWriteButtonWrap}>
          <button className={style.boardWriteButton}
            type="button" 
            onClick={(e)=>onClickBoardWriteButton(e)}
            > 올 리 기</button>
        </div>
  </div>      
  );
}

BoardWrite.defaultProps = {
  
  
};

export default BoardWrite;