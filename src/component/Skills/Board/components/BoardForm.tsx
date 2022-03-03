import React from "react"
import {DumyBoard} from '../../../Nav/index'
// import styled from 'styled-components'

type BoardFormProps = {
  dumyBoards:DumyBoard[];
  paging:{
    startIndex:number;
    endIndex:number;
    pageIndex:number;
  };
  onClickBoardFormUpdateButton:Function;
};

export const BoardForm: React.FC<BoardFormProps> = ({dumyBoards, onClickBoardFormUpdateButton  }) => {
  let boardPageIndex = (dumyBoards.length - 1)%10;//page count -> 페이지 
  let boardPageStart = boardPageIndex * 10 - 10;//0
  let boardPageEnd = boardPageIndex * 10;//9

  console.log('====BoardForm=====')
  console.log('ind::',boardPageIndex);
  console.log('Start:',boardPageStart)
  console.log('End:',boardPageEnd)
  return(
    <div>
        {dumyBoards.map((board, i)=>{
          if (i>= boardPageStart || i<=boardPageEnd) {
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
          }

        })}
        <div></div>
    </div>
  );
}
  // BoardFormProps.defaultProps = {
  // };
    
  export default BoardForm;