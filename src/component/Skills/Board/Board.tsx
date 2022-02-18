// import { userInfo } from 'os';
import React, { Component } from 'react';
import styles from './Board.module.scss';
import {Props} from '../../Nav/index';
import { BoardUpdate,BoardWrite } from './components/';

interface State {
  input:{
  };
  userInfo:{
    id:string,
    password:string,
    user_name:string,
  };
  div_control:0|1|2,
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
      div_control:0,
      flag:{
        passwordCheckFlag:false,
      }
    }
  }
  onClick_Control = (flag:0|1|2) => {
      this.setState({
          div_control:flag
      })
  }

  render(){
    const {div_control} = this.state;
    
    return(
      <div>
        <div>
            <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(0)}>Board</div>
            <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(1)}>Write</div>
            <div className={styles.control_button} 
                onClick={()=>this.onClick_Control(2)}>Update</div>
        </div>
        <div>
            {div_control===0 && (
                <form>
                    <div>board</div>
                </form>
            )}
            {div_control===1 && (
                <BoardWrite />
            )}
            {div_control===2 && (
                <BoardUpdate />
            )}
        </div>
    </div>
    );
  }
}

export default Board;