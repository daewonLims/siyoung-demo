export { default } from './Nav';
export interface Props {
    userInfo:{
        id:string,
        password:string,
        user_name:string,
    };
    dumyData?: DumyUser[];
    [key:string]:any;
}
export interface State {
    menuToggle: boolean;
    menus:any;
    [key:string]:any;
}

export interface DumyUser {
    user_id: string;
    user_password: string;
    user_name: string;
    user_birth: string;
}

export interface DumyBoard {
    boardForm:{
        boardIndex:number;
        boardTitle:string;
        boardContent:string;
        boardUserName:string;
        boardWriteDate:string;
    }
}