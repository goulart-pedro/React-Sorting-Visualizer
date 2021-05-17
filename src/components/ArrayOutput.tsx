import React from "react";
export function ArrayOutput({ array }: { array: number[] }) {
    function mapElementArray(array:number[]) {
        return array.map((element: number, index: number) => (
                <div key={index} style={{ height: `${element}% ` }} className="array-bar"></div>
            ))
    }

    return (
        <div className="array-output">
            {mapElementArray(array)}
        </div>
    );
}
