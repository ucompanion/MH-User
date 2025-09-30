import React, { ReactNode } from 'react';

interface CheckboxProps {
    module: String,
    name: string,
    value?: string,
    checked: boolean,
    disabled: boolean,
    onClick: () => void;
    children?: ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ module, name, value, checked, disabled, onClick, children }) => {
    const className = `frm-checkbox ${module}`;
    return (
        <label className={className}>
            <input
                type="checkbox"
                name={name}
                value={value}
                className='checkbox'
                checked={checked}
                disabled={disabled}
                onClick={onClick}
            />
            <span className="label">{ children }</span>
        </label>
  );
};

export default Checkbox;