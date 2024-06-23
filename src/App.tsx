import React, {useEffect, useState} from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import {SetSettings} from "./components/SetSettings";
import useSound from "use-sound";
import removeAudio from "./audio/remove.mp3"

function App() {

    const [counterView, setCounterView] = useState("settings");
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCounter] = useState<number>(startValue)

    useEffect(() => {
        localStorageGet()
    }, []);


    useEffect(() => {
        localStorageSet()
    }, [count, maxValue, startValue]);

    const localStorageSet = () => {
        localStorage.setItem("counterValue", JSON.stringify(count))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }
    const localStorageGet = () => {
        let counterString = localStorage.getItem("counterValue")
        let startValueString = localStorage.getItem("startValue")
        let maxValueString = localStorage.getItem("maxValue")
        if (counterString) {
            let newCounter = JSON.parse(counterString)
            setCounter(newCounter)
        }
        if (startValueString) {
            let newStartValue = JSON.parse(startValueString)
            setStartValue(newStartValue)
        }
        if (maxValueString) {
            let newMaxValue = JSON.parse(maxValueString)
            setMaxValue(newMaxValue)
        }

    }

    const [removePlay] = useSound(removeAudio)

    const removeSettingsValue = () => {
        localStorage.removeItem("startValue")
        localStorage.removeItem("maxValue")
        setStartValue(0)
        setMaxValue(0)
        removePlay()
    }


    return (
        <div className="App">
            {/*{counterView === "settings" ? (*/}
            <SetSettings viewToCounter={() => setCounterView("counter")} setCounter={setCounter}
                         startValue={startValue} maxValue={maxValue}
                         setStartValue={setStartValue} setMaxValue={setMaxValue}
                         removeSettingsValue={removeSettingsValue}/>
            {/*) : (*/}
            <Counter viewToSettings={() => setCounterView("settings")} setCounter={setCounter}
                     startValue={startValue} maxValue={maxValue}
                     count={count}/>
            {/*)}*/}
        </div>


    );
}

export default App;
