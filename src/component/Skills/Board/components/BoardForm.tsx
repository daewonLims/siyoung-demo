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
            <div>{board.boardForm.boardIndex}</div>
            <div>{board.boardForm.boardTitle}</div>
            <div>{board.boardForm.boardContent}</div>
            <div>{board.boardForm.boardUserName}</div>
            <div>{board.boardForm.boardWriteDate}</div>
            <button type="button" onClick={(i) => {onClickBoardFormUpdateButton(i, board.boardForm)}} >수정하기</button>
          </div>
        )
      })}
  </div>
  );
  
  // BoardFormProps.defaultProps = {
  // };
    
  export default BoardForm;