import {startValueAC, startValueReducer} from "./startValue-reducer";

type InitialStateType = {
    startValue: number
}

let startState: InitialStateType

beforeEach(() => {
    startState = {
        startValue: 0,
    };
})

test(" start value", () => {

    const action = startValueAC(2);
    const endState = startValueReducer(startState, action)

    expect(endState.startValue).toBe(2);
});
