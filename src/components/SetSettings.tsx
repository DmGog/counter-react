import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import useSound from "use-sound";
import isDoneSetAudio from "./../audio/isDoneSet.mp3"


type SetSettingsType = {
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    maxValue: number
    startValue: number
    setCounter: (startValue: number) => void
    viewToCounter: () => void
    removeSettingsValue: () => void
}

export const SetSettings = (props: SetSettingsType) => {

    let {removeSettingsValue, viewToCounter, setCounter, setStartValue, setMaxValue, maxValue, startValue} = props

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }


    const [isDoneSetPlay] = useSound(isDoneSetAudio)
    const setValueCounter = () => {
        setCounter(startValue)
        viewToCounter()
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
};

