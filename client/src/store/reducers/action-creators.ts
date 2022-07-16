import {AuthCreators} from "./auth/actions-creators"
import {RepeatCreators} from "./repeat/action-creators"
import {ScheduleCreators} from "./schedule/action-creators"

export const allActionCreators = {
    ...AuthCreators,
    ...ScheduleCreators,
    ...RepeatCreators
}