interface DropdownOptionProps {
    value?: string;
    children?: any;
}
export const DropdownOption = ({ value, children }: DropdownOptionProps) => {
    return (
        <li value={value} className="dropdown-option">
            {children}
        </li>
    );
};
