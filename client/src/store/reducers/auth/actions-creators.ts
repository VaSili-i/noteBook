import {AppDispatch} from '../..';
import {IUser} from '../../../models/userModel';
import axios from 'axios';
import {
    AuthUserInterface,
    EnumUserAction,
    ErrorUserInterface,
    LoadingUserInterface,
    SucssesUserInterface
} from './types';
import jwt_decode from 'jwt-decode';


export const AuthCreators = {
    setIsLoading: (loading: boolean): LoadingUserInterface => ({type: EnumUserAction.SET_IS_LOADING, payload: loading}),
    setError: (error: string): ErrorUserInterface => ({type: EnumUserAction.SET_ERROR, payload: error}),
    setAuth: (auth: boolean): AuthUserInterface => ({type: EnumUserAction.SET_AUTH, payload: auth}),
    setSucsses: (user: IUser): SucssesUserInterface => ({type: EnumUserAction.SUCSSES_USER, payload: user}),
    registration: (user: any) => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthCreators.setIsLoading(true));
            setTimeout(async () => {
                let response = await axios.post('http://localhost:5000/auth/registration', user);
                let userData: IUser = jwt_decode(response.data);

                localStorage.setItem('auth', "true");
                localStorage.setItem('user', JSON.stringify(userData))
                localStorage.setItem('token', response.data)


                dispatch(AuthCreators.setSucsses(userData));
                dispatch(AuthCreators.setAuth(true));
            }, 2000)
        } catch (e) {
            dispatch(AuthCreators.setError('err'));
        }
    },
    login: (user: any) => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthCreators.setIsLoading(true));
            setTimeout(async () => {
                let response = await axios.post('http://localhost:5000/auth/login', user);
                let userData: IUser = jwt_decode(response.data);

                localStorage.setItem('auth', "true");
                localStorage.setItem('user', JSON.stringify(userData))

                dispatch(AuthCreators.setSucsses(userData));
                dispatch(AuthCreators.setAuth(true));
            }, 1000)
        } catch (e) {
            dispatch(AuthCreators.setError('err'));
        }
    },
    check: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthCreators.setIsLoading(true))
            let token = localStorage.getItem('token');
            if (!token) {
                return
            }

            let response = await axios.get('http://localhost:5000/auth/check',
                {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data) {
                return
            }
            let userData: IUser = jwt_decode(response.data);

            localStorage.setItem('auth', "true");
            localStorage.setItem('user', JSON.stringify(userData))
            console.log(response.data)
            console.log()

            dispatch(AuthCreators.setSucsses(userData));
            dispatch(AuthCreators.setAuth(true));
        } catch (e) {
            console.log(e)
        }
    }


}