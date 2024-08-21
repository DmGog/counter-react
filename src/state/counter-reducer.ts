
type IncCounterAT = ReturnType<typeof incCounterAC>
type ResetCounterAT = ReturnType<typeof resetCounterAC>
type ActionsType = IncCounterAT | ResetCounterAT


type InitialStateType = {
    count: number
}

const initialState: InitialStateType = {
    count: 0,
}


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNTER": {
            return {...state, count: action.count}
        }
        case "RESET-COUNTER": {
            return {...state, count: action.count}
        }

        default:
            return state
    }
}

export const incCounterAC = (count: number) => {
    return {
        type: "INC-COUNTER", count
    } as const
}

export const resetCounterAC = (count: number = 0) => {
    return {
        type: "RESET-COUNTER", count
    } as const
}

