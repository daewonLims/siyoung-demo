import React from "react"
import {DumyBoard} from '../../../Nav/index'
// import styled from 'styled-components'

type BoardFormProps = {
  dumyBoards:DumyBoard[];
  onClickBoardFormUpdateButton:Function;
};

export const BoardForm: React.FC<BoardFormProps> = ({dumyBoards, onClickBoardFormUpdateButton  }) => (
  <div>
      {dumyBoards.map((board, i)=>{
        return(
          <div key={i}>
            <div>{`게시글 번호 : ${board.boardForm.boardIndex+1}`}</div>
            <div>{`게시글 제목 : ${board.boardForm.boardTitle}`}</div>
            <div>{`게시글 내용 : ${board.boardForm.boardContent}`}</div>
            <div>{`게시자 이름 : ${board.boardForm.boardUserName}`}</div>
            <div>{`게시한 날짜 : ${board.boardForm.boardWriteDate}`}</div>
            <button type="button" onClick={(i) => {onClickBoardFormUpdateButton(i, board.boardForm)}} >수정하기</button>
          </div>
        )
      })}
  </div>
  );
  
  // BoardFormProps.defaultProps = {
  // };
    
  export default BoardForm;