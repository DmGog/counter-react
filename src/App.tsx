import React, {useCallback, useState} from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import {SetSettings} from "./components/SetSettings";
import useSound from "use-sound";
import removeAudio from "./audio/remove.mp3"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {startValueAC} from "./state/startValue-reducer";
import {maxValueAC} from "./state/maxValue-reducer";
import {resetCounterAC} from "./state/counter-reducer";

function App() {

    let count = useSelector<AppRootStateType, number>(state => state.count.count)
    let maxValue = useSelector<AppRootStateType, number>(state => state.maxValue.maxValue)
    let startValue = useSelector<AppRootStateType, number>(state => state.startValue.startValue)
    const dispatch = useDispatch()


    const [removePlay] = useSound(removeAudio)

    const removeSettingsValue = useCallback(() => {
        dispatch(startValueAC(0))
        dispatch(maxValueAC(0))
        dispatch(resetCounterAC())
        removePlay()
    }, [dispatch])


    return (
        <div className="App">
            <SetSettings startValue={startValue} maxValue={maxValue}
                         removeSettingsValue={removeSettingsValue}/>
            <Counter count={count}
                     startValue={startValue} maxValue={maxValue}
            />
        </div>


    );
}

export default App;
