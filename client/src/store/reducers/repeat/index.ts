import { RepeatTypeActions, ActionCreators, IStateRepeat } from './types';



const stateRepeat: IStateRepeat = {
    repeat: [
        {
            subject: 'sdfea',
            date: '3',
            done: true,
            ball: 4
        },
        {
            subject: 'sdfea',
            date: '3',
            done: true,
            ball: 4
        },
        {
            subject: 'sdfea',
            date: '3',
            done: true,
            ball: 1
        },
    ],
    isLoading: false,
    error: null
}


export const repeatReducer = function (state = stateRepeat, action: ActionCreators): IStateRepeat {
    switch (action.type) {
        case RepeatTypeActions.SET_LOADING_REPEAT:
            return { ...state, isLoading: action.payload }
        case RepeatTypeActions.SET_ERROR_REPEAT:
            return { ...state, error: action.payload, isLoading: false }
        case RepeatTypeActions.SUCCESS_REPEAT:
            return { ...state, repeat: action.payload, isLoading: false }
        default:
            return state
    }
}







