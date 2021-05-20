export const sleep = (time: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });

export const makeArray = (length: number, interval: number) =>
    Array.from({ length: length }, () => Math.ceil(Math.random() * interval));

export const findSmallestNumber = (array: number[], initPos: number = 0) => {
    let smallerIndex: number = initPos;
    for (let i = initPos; i < array.length; i++) {
        if (array[i + 1] < array[smallerIndex]) {
            smallerIndex = i + 1;
        }
    }
    return smallerIndex;
};

export const swap = (x: any, y: any) => {
    return [y, x];
};

export const testArray = (inputArray: number[]) => {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > inputArray[i + 1]) return false;
        if (inputArray[i] === null || inputArray[i] === undefined) return false;
    }
    return true;
};

// export const range = (start: number, stop: number, step = 1) =>
//     Array(Math.ceil((stop - start) / step))
//         .fill(start)
//         .map((x, y) => x + y * step);
