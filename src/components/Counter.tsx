import React from "react";
import {Button} from "./Button";

type CounterType = {
    count: number
    startValue: number
    maxValue: number
    setCounter: (counter: number) => void
    viewToSettings: () => void
}

export const Counter = (props: CounterType) => {
    const {viewToSettings, setCounter, count, startValue, maxValue} = props

    const onClickCounterIncHandler = () => {
        if (count < maxValue) {
            setCounter(count + 1)
        }
    }
    const onClickCounterResetHandler = () => {
        setCounter(startValue)
    }
    const viewToSettingsHandler = () => {
        viewToSettings()
    }

    return (
        <div className={"counter-wrapper"}>
            <div
                className={count === maxValue ? "counter-red" : "counter"}>
                {startValue === maxValue || startValue < 0 || startValue > maxValue || maxValue > 999
                    ? <span>enter an incorrect value</span>
                    : count}
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

