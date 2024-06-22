import React, {useState} from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import {SetSettings} from "./components/SetSettings";


function App() {

    const [counterView, setCounterView] = useState("settings");
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCounter] = useState<number>(startValue)

    // useEffect(() => {
    //     localStorageGet()
    // }, []);
    //
    //
    // useEffect(() => {
    //     localStorageSet()
    // }, [count]);
    //
    // const localStorageSet = () => {
    //     localStorage.setItem("counterValue", JSON.stringify(count))
    // }
    // const localStorageGet = () => {
    //     let counterString = localStorage.getItem("counterValue")
    //     if (counterString) {
    //         let newCounter = JSON.parse(counterString)
    //         setCounter(newCounter)
    //     }
    // }



    return (
        <div className="App">
            {/*{counterView === "settings" ? (*/}
            <SetSettings viewToCounter={() => setCounterView("counter")} setCounter={setCounter}
                         startValue={startValue} maxValue={maxValue}
                         setStartValue={setStartValue} setMaxValue={setMaxValue}/>
            {/*) : (*/}
            <Counter viewToSettings={() => setCounterView("settings")} setCounter={setCounter}
                     startValue={startValue} maxValue={maxValue}
                     count={count}/>
            {/*)}*/}
        </div>


    );
}

export default App;
