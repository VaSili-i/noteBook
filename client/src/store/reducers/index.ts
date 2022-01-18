import { userReducer } from "./auth"
import { repeatReducer } from "./repeat"
import { schedulesReducer } from "./schedule"

export const allReducers = {
    user: userReducer,
    schedule: schedulesReducer,
    repeat: repeatReducer
}