import {counterReducer, incCounterAC} from "./counter-reducer";

type InitialStateType = {
    count: number
}

let startState:InitialStateType

beforeEach(() => {
    startState = {
        count: 0,
    };
})

test('increment counter', () => {

    const action = incCounterAC(1);
    const endState = counterReducer(startState, action)

    expect(endState.count).toBe(1);
});
