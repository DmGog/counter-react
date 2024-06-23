import React from "react";
import {Button} from "./Button";
import useSound from "use-sound";
import incAudio from "./../audio/inc.mp3"
import removeAudio from "./../audio/remove.mp3"
import errorAudio from "./../audio/error.mp3"


type CounterType = {
    count: number
    startValue: number
    maxValue: number
    setCounter: (counter: number) => void
    viewToSettings: () => void
}

export const Counter = (props: CounterType) => {
    const {viewToSettings, setCounter, count, startValue, maxValue} = props

    const [incPlay] = useSound(incAudio)
    const [removePlay] = useSound(removeAudio)
    const [errorPlay] = useSound(errorAudio)

    const onClickCounterIncHandler = () => {
        if (count < maxValue) {
            setCounter(count + 1)
            incPlay()
        }
    }
    const onClickCounterResetHandler = () => {
        setCounter(startValue)
        removePlay()
    }
    const viewToSettingsHandler = () => {
        viewToSettings()
    }

    const start = startValue === maxValue || startValue < 0 || startValue > maxValue || maxValue > 999 ?
        <span>incorrect value</span> : count
    console.log(maxValue)

    if (startValue === maxValue || startValue < 0 || maxValue > 999 || maxValue < 0 || maxValue < startValue) {
        errorPlay()
    }

    return (
        <div className={"counter-wrapper"}>
            <div
                className={count === maxValue ? "counter-red" : "counter"}>
                {startValue === 0 && maxValue === 0 ?
                    <span className={"start"}>choose the starting values</span> : start}
            </div>

            <div className={"button-wrapper"}>
                <Button title={"inc"} onClick={onClickCounterIncHandler}
                        disabled={count === maxValue || startValue === maxValue || startValue < 0 || startValue > maxValue || maxValue > 999}/>
                <Button title={"reset"} onClick={onClickCounterResetHandler}
                        disabled={count === startValue || startValue === maxValue || startValue < 0 || startValue > maxValue || maxValue > 999}/>
                {/*<Button title={"set"} onClick={viewToSettingsHandler}/>*/}
            </div>
        </div>
    );
};

