import React from "react"

type BoardUpdateProps = {
    dumyBoardUpdate:{
        boardIndex:number;
        boardTitle:string;
        boardContent:string;
        boardUserName:string;
        boardWriteDate:string;
    }; 
    boardUpdate:BoardUpdateState;
    onChangeBoardUpdate: Function;
    onClcikBoardUpdateButton:Function;
};

interface BoardUpdateState {
    board_update_title:string;
    board_update_content:string;
}

export const BoardUpdate: React.FC<BoardUpdateProps> = ({dumyBoardUpdate, onChangeBoardUpdate, onClcikBoardUpdateButton,boardUpdate }) => (
  <div>
      <h2>boardUpdate</h2>
        <div>{`게시물 번호 : ${dumyBoardUpdate.boardIndex+1}`}</div>
      <div>
        <input type="text" id="boardUpdateTitle" 
          value={boardUpdate.board_update_title}
          onChange={(e)=>{
            let value = e.target.value;
            onChangeBoardUpdate(value, true);
          }} />
      </div>
      <div>
        <input type="text" id="boardUpdateContent"  
          value={boardUpdate.board_update_content}
          onChange={(e)=>{
            let value = e.target.value;
            onChangeBoardUpdate(value, false);
          }} /></div>
      <div>{dumyBoardUpdate.boardUserName }</div>
      <div>{dumyBoardUpdate.boardWriteDate }</div>
      <button onClick={(e)=>{onClcikBoardUpdateButton(e)}} >수정하기</button>
  </div>
);
// BoardUpdateProps.defaultProps = {
// };
  
export default BoardUpdate;