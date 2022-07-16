export interface ISchedule {
    type: string,
    list: string[]
}

export interface IDefaultSchedule {
    date: string,
    schedule: ISchedule
}

export interface IDefaultSchedules {
    schedules: IDefaultSchedule[],
    error: string | null,
    loading: boolean
}

export enum EnumScheduleAction {
    SUCSSES_SCHEDULE = 'SUCSSES_SCHEDULE',
    SET_ERROR_SCHEDULE = 'SET_ERROR_SCHEDULE',
    SET_IS_LOADING_SCHEDULE = 'SET_IS_LOADING_SCHEDULE'
}

export interface ErrorScheduleInterface {
    type: EnumScheduleAction.SET_ERROR_SCHEDULE,
    payload: string,
}

export interface LoadingScheduleInterface {
    type: EnumScheduleAction.SET_IS_LOADING_SCHEDULE,
    payload: boolean,
}

export interface SucssesScheduleInterface {
    type: EnumScheduleAction.SUCSSES_SCHEDULE,
    payload: IDefaultSchedule[],
}

export type TypeScheduleAction = ErrorScheduleInterface | LoadingScheduleInterface | SucssesScheduleInterface;

