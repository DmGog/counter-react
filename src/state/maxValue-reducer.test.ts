import {maxValueAC, maxValueReducer} from "./maxValue-reducer";

type InitialStateType = {
    maxValue: number
}

let startState: InitialStateType

beforeEach(() => {
    startState = {
        maxValue: 0,
    };
})

test("max value", () => {

    const action = maxValueAC(2);
    const endState = maxValueReducer(startState, action)
    expect(endState.maxValue).toBe(2);
});

test("max value < 0", () => {

    const action = maxValueAC(-1);
    const endState = maxValueReducer(startState, action)
    expect(endState.maxValue).toBe(0);
});
