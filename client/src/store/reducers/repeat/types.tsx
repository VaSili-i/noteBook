import {IRepeat} from "../../../models/repeatModule";

export const enum RepeatTypeActions {
    SET_LOADING_REPEAT = 'SET_LOADING_REPEAT',
    SET_ERROR_REPEAT = 'SET_ERROR_REPEAT',
    SUCCESS_REPEAT = 'SUCCESS_REPEAT'
}

export interface LoadingRepeatActionInterface {
    type: RepeatTypeActions.SET_LOADING_REPEAT,
    payload: boolean,
}

export interface ErrorRepeatActionInterface {
    type: RepeatTypeActions.SET_ERROR_REPEAT,
    payload: string | null,
}

export interface SuccessRepeatActionInterface {
    type: RepeatTypeActions.SUCCESS_REPEAT,
    payload: IRepeat[],
}

export type ActionCreators = LoadingRepeatActionInterface | ErrorRepeatActionInterface | SuccessRepeatActionInterface;

export interface IStateRepeat {
    repeat: IRepeat[],
    isLoading: boolean,
    error: string | null,
}
