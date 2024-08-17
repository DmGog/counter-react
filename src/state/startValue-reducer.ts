
type startValueAT = ReturnType<typeof startValueAC>
type ActionsType = startValueAT
type InitialStateType = {
    startValue: number
}

const initialState: InitialStateType = {
    startValue: 0,
}


export const startValueReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "START-VALUE": {
            if (action.payload.startValue < 0) {
                return state;
            }
            return {...state, startValue: action.payload.startValue}
        }
        default:
            return state
    }
}

export const startValueAC = (startValue: number) => {
    return {
        type: "START-VALUE", payload: {startValue}
    } as const
}

