export interface IUser {
    name: string,
    role: string
}

interface IListSchedule {
    type: string,
    lists: string[]
}

export type ISchedule = IListSchedule[]


