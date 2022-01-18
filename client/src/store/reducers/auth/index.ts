import { IDefaultState, TypeUserAction, EnumUserAction } from './types'
import { IUser } from '../../../models/userModel'
import { createSelector } from 'reselect'

const defaultState: IDefaultState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: null
}

export function userReducer(state = defaultState, action: TypeUserAction): IDefaultState {
    switch (action.type) {
        case EnumUserAction.SET_IS_LOADING:
            return { ...state, isLoading: false }
        case EnumUserAction.SUCSSES_USER:
            return { ...state, user: action.payload, isLoading: false }
        case EnumUserAction.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        case EnumUserAction.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false }
        default:
            return state
    }
}























