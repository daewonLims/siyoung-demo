import React from "react"
import {DumyBoard} from '../../../Nav/index'
import style from '../Board.module.scss'

type BoardFormProps = {
  dumyBoards:DumyBoard[];
  paging:{
    limit:number;
    page:number;
    offset:any;
  };
  last:number;
  numPageNavi:number[];
  setPagiNavState:Function;
  onClickBoardFormUpdateButton:Function;
};

export const BoardForm: React.FC<BoardFormProps> = ({dumyBoards,paging,numPageNavi,last, setPagiNavState, onClickBoardFormUpdateButton  }) => {

  return(
    <div>
      <div className={style.boardTable}>
        <div className={style.boardTr}>
          <div className={style.boardIdx}>{`No`}</div>
          <div className={style.boardTitle}>{`Title`}</div>
          <div className={style.boardContent}>{`Content`}</div>
          <div className={style.boardUserName}>{`User`}</div>
          <div className={style.boardDate}>{`Date`}</div>
          <div className={style.boardbuttons}>{`tool`}</div>
        </div>
        {dumyBoards.slice(paging.offset, paging.offset + paging.limit).map((board, i)=>{
            return(
              <div key={i} className={style.boardTr}>
                <div className={style.boardIdx}>{`${board.boardForm.boardIndex+1}`}</div>
                <div className={style.boardTitle}>{`${board.boardForm.boardTitle}`}</div>
                <div className={style.boardContent}>{`${board.boardForm.boardContent}`}</div>
                <div className={style.boardUserName}>{`${board.boardForm.boardUserName}`}</div>
                <div className={style.boardDate}>{`${board.boardForm.boardWriteDate}`}</div>
                <button type="button" onClick={(i) => {onClickBoardFormUpdateButton(i, board.boardForm)}} >수정하기</button>
                <button type="button"  >삭제하기</button>
              </div>
            )
        })}
      </div>
        <div className={style.pageNavWrap}>
          <button className={style.pageNavi} onClick={()=>{
            //page -1
            setPagiNavState(paging.limit, (paging.page-1))
          }} disabled={paging.page===1?true:false}>{'<'}</button>
          {numPageNavi.map((__,i)=>{
            return(
              <button key={i} className={style.pageNavi}
              aria-current={paging.page === i + 1 ? "page" : undefined}
                onClick={()=>{
                  setPagiNavState(paging.limit, (i+1))
              }}>{i+1}</button>
            )
          })}
          <button className={style.pageNavi} onClick={()=>{
            //page +1
            setPagiNavState(paging.limit, (paging.page+1))
          }} disabled={paging.page===last?true:false}>{'>'}</button>
        </div>
    </div>
  );
}
  // BoardFormProps.defaultProps = {
  // };
    
  export default BoardForm;