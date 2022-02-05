export { default } from './Nav';
export interface Props {
    userInfo:{
        id:string,
        password:string,
        userName:string,
        userBirth:string,
    };
    [key:string]:any;
}