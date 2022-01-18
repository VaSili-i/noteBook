import { IUser } from "../../../models/userModel";

export interface IDefaultState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: null | string;
}



export enum EnumUserAction {
    SUCSSES_USER = 'SUCSSES_USER',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_AUTH = 'SET_AUTH'
}

export interface SucssesUserInterface {
    type: EnumUserAction.SUCSSES_USER;
    payload: IUser;
}

export interface ErrorUserInterface {
    type: EnumUserAction.SET_ERROR;
    payload: string;
}
export interface LoadingUserInterface {
    type: EnumUserAction.SET_IS_LOADING;
    payload: boolean;
}
export interface AuthUserInterface {
    type: EnumUserAction.SET_AUTH;
    payload: boolean;
}


export type TypeUserAction = SucssesUserInterface | ErrorUserInterface | LoadingUserInterface | AuthUserInterface;
