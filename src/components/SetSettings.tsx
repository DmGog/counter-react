import React, {ChangeEvent, memo} from "react";
import {Button} from "./Button";
import useSound from "use-sound";
import isDoneSetAudio from "./../audio/isDoneSet.mp3"
import {useDispatch} from "react-redux";
import {startValueAC} from "../state/startValue-reducer";
import {maxValueAC} from "../state/maxValue-reducer";
import {resetCounterAC} from "../state/counter-reducer";


type SetSettingsType = {
    maxValue: number
    startValue: number
    removeSettingsValue: () => void
}

export const SetSettings = memo((props: SetSettingsType) => {

    const {removeSettingsValue, maxValue, startValue} = props
    const dispatch = useDispatch()

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(startValueAC(Number(e.currentTarget.value)))
    }
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueAC(Number(e.currentTarget.value)))
    }


    const [isDoneSetPlay] = useSound(isDoneSetAudio)
    const setValueCounter = () => {
        dispatch(resetCounterAC(startValue))
        isDoneSetPlay()
    }

    return (
        <div className={"settings-wrapper"}>
            <div className={"input-wrapper"}>
                <label>max value: <input
                    value={maxValue}
                    type={"number"} placeholder={"max value"}
                    onChange={changeMaxValueHandler}
                    className={startValue === maxValue || maxValue < startValue || maxValue < 0 || maxValue > 999 ? "input-error" : ""}/></label>
                <label>start value: <input
                    value={startValue}
                    type={"number"} placeholder={"start value"}
                    onChange={changeStartValueHandler}
                    className={startValue === maxValue || startValue < 0 || startValue > 999 ? "input-error" : ""}/></label>
            </div>
            <div className={"button-wrapper"}>
                <Button title={"SET"} onClick={setValueCounter}
                        disabled={startValue === maxValue || startValue < 0 || startValue > maxValue || maxValue > 999}/>
                <Button title={"CLEAR"} onClick={removeSettingsValue} disabled={startValue === 0 && maxValue === 0}/>
            </div>
        </div>
    );
});

