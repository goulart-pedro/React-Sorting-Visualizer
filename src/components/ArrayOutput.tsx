import React from "react";

interface OutputProps {
    array:number[]
}


const ArrayElement = (index:number,height: number) => {
    return <div key={index} style={{ height: `${height}% ` }} className="array-bar"></div>
}

export function ArrayOutput({ array }: OutputProps) {
    const mapElementArray = (array:number[]) => array.map((element: number, index: number) => (
                ArrayElement(index, element)
            ))

    return (
        <div className="array-output">
            {mapElementArray(array)}
        </div>
    );
}
