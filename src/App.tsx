import React, { useState } from "react";
import "./App.css";
import { ArrayOutput } from "./components/ArrayOutput";
import { makeArray } from "./utils/utilFunctions";
import { SortingControlls } from "./components/SortingControlls";

function App() {
    const [arraySize, setArraySize] = useState(50);
    const [array, setArray] = useState(makeArray(arraySize, 100));

    return (
        <div>
            <div className="main-wrapper">
                <SortingControlls
                    setArray={setArray}
                    array={array}
                    setArraySize={setArraySize}
                    arraySize={arraySize}
                />
                <div className="output-wrapper">
                    <ArrayOutput array={array} />
                </div>
            </div>

            <footer>
                <span>Made with ❤ by Pedro Goulart</span>
            </footer>
        </div>
    );
}

export default App;
