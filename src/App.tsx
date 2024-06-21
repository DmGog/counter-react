import React from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import {CounterRandom} from "./components/CounterRandom";


function App() {
    return (
        <div className="App">
            <Counter/> {/*обычный счетчик */}
            {/*<CounterRandom/> /!*рандомный счетчик*!/*/}
        </div>
    );
}

export default App;
