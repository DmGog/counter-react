import React, {useEffect, useState} from "react";
import {Button} from "./Button";

type CounterType = {
    // counter:number
    // onClickCounterIncHandler: () => void
    // onClickCounterResetHandler: () => void
    // minCount: number
    // maxCount: number
}

export const Counter = (props: CounterType) => {

    const maxCount: number = 5
    const minCount: number = 0
    let [counter, setCounter] = useState<number>(minCount)

    useEffect(() => {
        localStorageGet()
    }, []);


    useEffect(() => {
        localStorageSet()
    }, [counter]);

    const localStorageSet = () => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }
    const localStorageGet = () => {
        let counterString = localStorage.getItem("counterValue")
        if (counterString) {
            let newCounter = JSON.parse(counterString)
            setCounter(newCounter)
        }
    }

    const onClickCounterIncHandler = () => {
        if (counter < maxCount) {
            setCounter(++counter)
        }

    }
    const onClickCounterResetHandler = () => {
        setCounter(minCount)
    }

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

