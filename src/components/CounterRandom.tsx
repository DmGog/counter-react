import React, {useRef, useState} from "react";
import {Button} from "./Button";

export const CounterRandom = () => {
    const minNumber = 0
    let [counter, setCounter] = useState<number>(minNumber);
    const randomNumber = useRef<number>(3);

    function getRandom() {
        return Math.floor(Math.random() * 10) + 1;
    }

    const onClickCounterIncHandler = () => {
        if (counter < randomNumber.current) {
            setCounter(++counter)
        }
    };

    const onClickCounterResetHandler = () => {
        randomNumber.current = getRandom();
        setCounter(minNumber);
    };

    const progressBar = (counter / randomNumber.current) * 100;

    return (
        <div className={"counter-wrapper"}>
            <div className={"random"}>Max number: {randomNumber.current}</div>
            <div className={counter === randomNumber.current ? "counter-red" : "counter"}>{counter}</div>
            <div className="progress-bar">
                <div className="progress" style={{width: `${progressBar}%`}}></div>
            </div>
            <div className={"button-wrapper"}>
                <Button title={"inc"} onClick={onClickCounterIncHandler} disabled={counter === randomNumber.current}/>
                <Button title={"reset"} onClick={onClickCounterResetHandler} disabled={counter === minNumber}/>
            </div>
        </div>
    );
};