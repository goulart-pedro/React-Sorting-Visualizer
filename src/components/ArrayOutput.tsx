import React from "react";
export function ArrayOutput({ array }: { array: number[] }) {
    return (
        <div className="array-output">
            {array.map((element: number, index: number) => (
                <div key={index} style={{ height: `${element}% ` }} className="array-bar"></div>
            ))}
        </div>
    );
}
