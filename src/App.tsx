import React, {useState} from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import {CounterRandom} from "./components/CounterRandom";

function App() {

    const maxCount: number = 5
    const minCount: number = 0
    let [counter, setCounter] = useState<number>(minCount)

    const onClickCounterIncHandler = () => {
        if (counter < maxCount) {
            setCounter(++counter)
        }
    }
    const onClickCounterResetHandler = () => {
        setCounter(minCount)
    }


    return (
        <div className="App">
            <Counter counter={counter} onClickCounterIncHandler={onClickCounterIncHandler}
                     onClickCounterResetHandler={onClickCounterResetHandler} maxCount={maxCount} minCount={minCount}/>
            <CounterRandom/>
        </div>
    );
}

export default App;
