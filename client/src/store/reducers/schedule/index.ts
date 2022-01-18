import { IDefaultSchedule, TypeScheduleAction, IDefaultSchedules, EnumScheduleAction } from './types'



const defaultSchedule: IDefaultSchedule = {
    date: '',
    schedule: {
        type: '',
        list: []
    }
}


const defaultSchedules: IDefaultSchedules = {
    schedules: [
        defaultSchedule
    ],
    error: null,
    loading: false
}

export function schedulesReducer(state = defaultSchedules, action: TypeScheduleAction): IDefaultSchedules {
    switch (action.type) {
        case EnumScheduleAction.SET_IS_LOADING_SCHEDULE:
            return { ...state, loading: action.payload }
        case EnumScheduleAction.SUCSSES_SCHEDULE:
            return { ...state, loading: false, schedules: action.payload }
        case EnumScheduleAction.SET_ERROR_SCHEDULE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}














