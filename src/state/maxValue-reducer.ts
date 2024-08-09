import React from "react";

type maxValueAT = ReturnType<typeof maxValueAC>
type ActionsType = maxValueAT
type InitialStateType = {
    maxValue: number
}

const initialState: InitialStateType = {
    maxValue: 0,
}


export const maxValueReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "MAX-VALUE": {
            if (action.payload.maxValue < 0) {
                return state;
            }
            return {...state, maxValue: action.payload.maxValue}
        }
        default:
            return state
    }
}

export const maxValueAC = (maxValue: number) => {
    return {
        type: "MAX-VALUE", payload: {maxValue}
    } as const
}

