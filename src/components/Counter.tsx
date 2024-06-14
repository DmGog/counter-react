import React from "react";
import {Button} from "./Button";

type CounterType = {
    counter: number
    onClickCounterIncHandler: () => void
    onClickCounterResetHandler: () => void
    minCount: number
    maxCount: number
}

export const Counter = (props: CounterType) => {

    const {counter, onClickCounterIncHandler, onClickCounterResetHandler, minCount, maxCount} = props

    return (
        <div className={"counter-wrapper"}>
            <div className={counter === maxCount ? "counter-red" : "counter"}>{counter}</div>

            <div className={"button-wrapper"}>
                <Button title={"inc"} onClick={onClickCounterIncHandler} disabled={counter === maxCount}/>
                <Button title={"reset"} onClick={onClickCounterResetHandler} disabled={counter === minCount}/>
            </div>
        </div>
    );
};

