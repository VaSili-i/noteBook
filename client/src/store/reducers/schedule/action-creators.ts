import axios from 'axios';
import { AppDispatch } from '../..'
import { EnumScheduleAction, ErrorScheduleInterface, IDefaultSchedule, LoadingScheduleInterface, SucssesScheduleInterface } from './types'


export const ScheduleCreators = {
    SetLoading: (loading: boolean): LoadingScheduleInterface => ({ type: EnumScheduleAction.SET_IS_LOADING_SCHEDULE, payload: loading }),
    SetSucsses: (schedule: IDefaultSchedule[]): SucssesScheduleInterface => ({ type: EnumScheduleAction.SUCSSES_SCHEDULE, payload: schedule }),
    SetError: (error: string): ErrorScheduleInterface => ({ type: EnumScheduleAction.SET_ERROR_SCHEDULE, payload: error }),

    addSchedule: (schedule: IDefaultSchedule) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ScheduleCreators.SetLoading(true));
            let response = await axios.post('http://localhost:5000/schedule', schedule);
            dispatch(ScheduleCreators.SetSucsses(response.data));
        } catch (e) {
            dispatch(ScheduleCreators.SetError('it is err add'))
        }
    },
    fetchSchedule: (schedule: IDefaultSchedule) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ScheduleCreators.SetLoading(true));
            let response = await axios.get('http://localhost:5000/schedule');
            dispatch(ScheduleCreators.SetSucsses(response.data));
        } catch (e) {
            dispatch(ScheduleCreators.SetError('it is err fetch'))
        }
    }
}