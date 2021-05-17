import React, { useState } from "react";
import "./App.css";
import { ArrayOutput } from "./components/ArrayOutput";
import { makeArray } from "./utils/utilFunctions";
import { SortingControlls } from "./components/SortingControlls";

function App() {
    const [numberArraySize, setNumberArraySize] = useState(50);
    const [numberArray, setArray] = useState(makeArray(numberArraySize, 100));

    return (
        <div>
            <div className="main-wrapper">
                <SortingControlls
                    setArray={setArray}
                    array={numberArray}
                    setArraySize={setNumberArraySize}
                    arraySize={numberArraySize}
                />
                <div className="output-wrapper">
                    <ArrayOutput array={numberArray} />
                </div>
            </div>

            <footer>
                <span>Made with ❤ by Pedro Goulart</span>
            </footer>
        </div>
    );
}

export default App;
