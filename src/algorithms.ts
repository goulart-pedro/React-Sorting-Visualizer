import * as Utilities from "./utils/utilFunctions";

export interface Animation {
    action: "comparison" | "swap" | "mod";
    items: number[];
}

export const makeAnimHandler = (animations: Animation[]) => {
    return (animation: Object) => animations.push(animation as Animation);
};

export const bubbleSort = (
    inputArray: number[],
    animHandler: Function,
    end = inputArray.length
) => {
    let swaps = 0;
    for (let j = 0; j < end - 1; j++) {
        animHandler({ action: "comparison", items: [j, j + 1] });

        if (inputArray[j] > inputArray[j + 1]) {
            animHandler({ action: "swap", items: [j, j + 1] });
            [inputArray[j], inputArray[j + 1]] = Utilities.swap(inputArray[j], inputArray[j + 1]);
            swaps++;
        }
    }

    if (swaps === 0) return inputArray;
    bubbleSort(inputArray, animHandler, end - 1);
};

export const selectionSort = (inputArray: number[], animator: Function) => {
    for (let i = 0; i < inputArray.length; i++) {
        const minIdx = Utilities.findSmallestNumber(inputArray, i);
        [inputArray[i], inputArray[minIdx]] = Utilities.swap(inputArray[i], inputArray[minIdx]);

        animator({ action: "comparison", items: [i, minIdx] });
        animator({ action: "swap", items: [i, minIdx] });
    }
    return inputArray;
};

export function mergeSort(
    array: number[],
    startIdx: number,
    endIdx: number,
    auxArray: number[],
    animator: Function
) {
    if (startIdx >= endIdx) return array;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSort(auxArray, startIdx, midIdx, array, animator);
    mergeSort(auxArray, midIdx + 1, endIdx, array, animator);
    merge(array, startIdx, endIdx, midIdx, auxArray, animator);
}

function merge(
    array: number[],
    startIdx: number,
    endIdx: number,
    midIdx: number,
    auxArray: number[],
    animator: Function
) {
    let k = startIdx;
    let _pl = startIdx;
    let _pr = midIdx + 1;
    const modAnimsTemp = [];

    while (_pl <= midIdx && _pr <= endIdx) {
        animator({ action: "comparison", items: [_pl, _pr] });

        if (auxArray[_pl] <= auxArray[_pr]) {
            modAnimsTemp.push({ action: "mod", items: [k, auxArray[_pl]] });
            array[k++] = auxArray[_pl++];
        } else {
            modAnimsTemp.push({ action: "mod", items: [k, auxArray[_pr]] });
            array[k++] = auxArray[_pr++];
        }
    }

    while (_pl <= midIdx) {
        modAnimsTemp.push({ action: "mod", items: [k, auxArray[_pl]] });
        array[k++] = auxArray[_pl++];
    }
    while (_pr <= endIdx) {
        modAnimsTemp.push({ action: "mod", items: [k, auxArray[_pr]] });
        array[k++] = auxArray[_pr++];
    }

    for (let i of modAnimsTemp) animator(i);
}
