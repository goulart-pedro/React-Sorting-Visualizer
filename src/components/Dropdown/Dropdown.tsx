import React, { useState } from "react";
import { ArrowDropDown } from "../icons/SvgIcons";
import { useClickOutside } from "../useClickOutside";

interface DropdownProps {
    value?: String;
    children?: any;
    onClick: Function;
    // TODO allow onClick to be optional
}

export const Dropdown = ({ value, children, onClick }: DropdownProps) => {
    const [isActive, setIsActive] = useState(false);
    const [intValue, setIntValue] = useState(value);
    const menuRef = useClickOutside(() => setIsActive(false));

    const setEventHandler = (elValue: String) => onClick(elValue);
    const handleClick = () => setIsActive(!isActive);

    const handleChange = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.getAttribute("value")) {
            const targetValue = target.getAttribute("value") as string;
            e.stopPropagation();
            setIsActive(false);
            setIntValue(targetValue);
            setEventHandler(targetValue);
        }
    };

    return (
        <div className="dropdown" ref={menuRef}>
            <div className="dropdown-selector" onClick={handleClick}>
                <span className="dropdown-selected">{intValue}</span>
                <span className={`dropdown-button-wrapper ${isActive ? "dropdown-button-up" : ""}`}>
                    <ArrowDropDown />
                </span>
            </div>
            <ul
                onClick={handleChange}
                className={`dropdown-options ${isActive ? "active" : "inactive"}`}>
                {children}
            </ul>
        </div>
    );
};
