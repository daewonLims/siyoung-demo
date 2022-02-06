export { default } from './Nav';
export interface Props {
    userInfo:{
        id:string,
        password:string,
    };
    [key:string]:any;
}
export interface State {
    menuToggle: boolean;
    menus:any;
    [key:string]:any;
}