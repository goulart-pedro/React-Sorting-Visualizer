import React, { useState } from "react";
import * as Utilities from "../utils/utilFunctions";
import * as Algorithms from "../algorithms";
import { Animation } from "../algorithms";
import { Animator } from "../utils/Animator";
import { Dropdown } from "./Dropdown/Dropdown";
import { DropdownOption } from "./Dropdown/DropdownOption";
import { PlayArrow, ShuffleIcon } from "./icons/SvgIcons";

interface SortingControllsProps {
    setArray: Function;
    setArraySize: Function;
    arraySize: number;
    array: number[];
}

export function SortingControlls({
    array,
    setArray,
    arraySize,
    setArraySize,
}: SortingControllsProps) {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");
    const [delayTime, setDelayTime] = useState(50);

    const delayer = async () => await Utilities.sleep(delayTime);

    function runAlgo(algoName: string) {
        const animations: Animation[] = [];
        const animHandler = Algorithms.makeAnimHandler(animations);
        if (algoName === "Merge Sort")
            Algorithms.mergeSort(array, 0, array.length - 1, array.slice(), animHandler);
        if (algoName === "Bubble Sort") Algorithms.bubbleSort(array, animHandler);
        if (algoName === "Selection Sort") Algorithms.selectionSort(array, animHandler);
        animate(animations);
    }

    async function animate(animations: Animation[]) {
        const animator = new Animator();
        for (const animation of animations) {
            await delayer();
            animator.animate(animation);
        }
    }

    function handleArraySizeChange(e: React.KeyboardEvent<HTMLInputElement>) {
        const value = parseInt(e.currentTarget.value);
        const isValueOutOfBounds = value < 2 || value > 1000;
        const isValueNumber = typeof(value) == 'number';
        if (isValueOutOfBounds || !isValueNumber) 
            return;
        setArraySize(parseInt(e.currentTarget.value));
        setArray(Utilities.makeArray(arraySize, 100));
    }

    function handleDelayTimeChange(setDelayTime: React.Dispatch<React.SetStateAction<number>>) {
        return (e: React.KeyboardEvent<HTMLInputElement>) => {
            const value = parseInt(e.currentTarget.value);
            setDelayTime(value);
        };
    }

    return (
        <div className="sorting-controlls-wrapper">
            <div className="sorting-controlls">
                <Dropdown value="Settings" onClick={setSelectedAlgorithm}>
                    <DropdownOption>
                        <p className="dropdown-option-label">Algorithm:</p>
                        <Dropdown onClick={setSelectedAlgorithm} value="Bubble Sort">
                            <DropdownOption value="Bubble Sort">Bubble Sort</DropdownOption>
                            <DropdownOption value="Merge Sort">Merge Sort</DropdownOption>
                            <DropdownOption value="Selection Sort">Selection Sort</DropdownOption>
                        </Dropdown>
                    </DropdownOption>
                    <DropdownOption>
                        <p className="dropdown-option-label">array size:</p>
                        <input
                            className="input-box"
                            type="text"
                            placeholder={arraySize.toString()}
                            onInput={(event: React.KeyboardEvent<HTMLInputElement>) => handleArraySizeChange(event)}
                        />
                    </DropdownOption>

                    <DropdownOption>
                        <p className="dropdown-option-label">delay (in ms):</p>
                        <input
                            className="input-box"
                            type="text"
                            placeholder={delayTime.toString()}
                            onKeyUp={handleDelayTimeChange(setDelayTime)}
                        />
                    </DropdownOption>
                </Dropdown>

                <div className="controll-section">
                    <button
                        className="button"
                        onClick={() => setArray(Utilities.makeArray(arraySize, 100))}>
                        <ShuffleIcon />
                    </button>
                    <button onClick={() => runAlgo(selectedAlgorithm)}>
                        <PlayArrow />
                    </button>
                </div>
            </div>
            <div className="progress-wrapper">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
}
