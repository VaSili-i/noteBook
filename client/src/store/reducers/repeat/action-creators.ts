import axios from "axios";
import {AppDispatch} from "../..";
import {IRepeat} from "../../../models/repeatModule";
import {
    ErrorRepeatActionInterface,
    LoadingRepeatActionInterface,
    RepeatTypeActions,
    SuccessRepeatActionInterface
} from "./types";

export const RepeatCreators = {
    setLoading: (loading: boolean): LoadingRepeatActionInterface => ({
        type: RepeatTypeActions.SET_LOADING_REPEAT,
        payload: loading
    }),
    setSuccess: (repeat: IRepeat[]): SuccessRepeatActionInterface => ({
        type: RepeatTypeActions.SUCCESS_REPEAT,
        payload: repeat
    }),
    setError: (error: string): ErrorRepeatActionInterface => ({
        type: RepeatTypeActions.SET_ERROR_REPEAT,
        payload: error
    }),
    fetchRepeat: () => {
        return async function (dispatch: AppDispatch) {
            try {
                dispatch(RepeatCreators.setLoading(true))
                let response = await axios.get<IRepeat[]>('http://localhost:5000/repeat');
                dispatch(RepeatCreators.setSuccess(response.data))
            } catch (e) {
                dispatch(RepeatCreators.setError('this error is fetching'));
            }
        }
    },
    addRepeat: (repeat: IRepeat) => {
        return async function (dispatch: AppDispatch) {
            try {
                let response = await axios.post<IRepeat[]>('http://localhost:5000/repeat', repeat);
                dispatch(RepeatCreators.setSuccess(response.data))
            } catch (e) {
                dispatch(RepeatCreators.setError('this error is fetching'));
            }
        }
    }
}