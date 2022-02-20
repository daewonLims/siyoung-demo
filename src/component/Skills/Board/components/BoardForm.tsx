import React from "react"
import {DumyBoard} from '../../../Nav/index'
// import styled from 'styled-components'

type BoardFormProps = {
  dumyBoards:DumyBoard[];
};

export const BoardForm: React.FC<BoardFormProps> = ({dumyBoards  }) => (
  <div>
      {dumyBoards.map((board, i)=>{
        return(
          <div key={i}>
            <div>{board.boardForm.boardIndex}</div>
            <div>{board.boardForm.boardTitle}</div>
            <div>{board.boardForm.boardUserName}</div>
            <div>{board.boardForm.boardWriteDate}</div>
          </div>
        )
      })}
  </div>
  );
  
  // BoardFormProps.defaultProps = {
  // };
    
  export default BoardForm;