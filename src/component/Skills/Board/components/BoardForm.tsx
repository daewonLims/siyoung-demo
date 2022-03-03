import React from "react"
import {DumyBoard} from '../../../Nav/index'

type BoardFormProps = {
  dumyBoards:DumyBoard[];
  paging:{
    limit:number;
    page:number;
    offset:any;
  };
  last:number;
  setPagiNavState:Function;
  onClickBoardFormUpdateButton:Function;
};

export const BoardForm: React.FC<BoardFormProps> = ({dumyBoards,paging,last, setPagiNavState, onClickBoardFormUpdateButton  }) => {

  return(
    <div>
        {dumyBoards.slice(paging.offset, paging.offset + paging.limit).map((board, i)=>{
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
        <div>
          <button onClick={()=>{
            //page -1
            setPagiNavState(paging.limit, (paging.page-1))
          }} disabled={paging.page===1?true:false}>{'이전'}</button>
          <button onClick={()=>{
            //page +1
            setPagiNavState(paging.limit, (paging.page+1))
          }} disabled={paging.page===last?true:false}>{'다음'}</button>
        </div>
    </div>
  );
}

  // BoardFormProps.defaultProps = {
  // };
    
  export default BoardForm;