import React, { useEffect, useRef } from "react";

export const useClickOutside = (handler: Function) => {
    const domNodeRef = useRef() as React.MutableRefObject<any>;

    useEffect(() => {
        const verifier = (event: MouseEvent) =>
            !domNodeRef.current.contains(event.target) ? handler() : null;

        document.addEventListener("mousedown", verifier);
        return () => document.removeEventListener("mousedown", verifier);
    });

    return domNodeRef;
};
