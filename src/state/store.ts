import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {maxValueReducer} from "./maxValue-reducer";
import {startValueReducer} from "./startValue-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    count: counterReducer,
    maxValue: maxValueReducer,
    startValue: startValueReducer
})


export const store = legacy_createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        count: store.getState().count,
        maxValue: store.getState().maxValue,
        startValue: store.getState().startValue
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store