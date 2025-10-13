import React, { ReactNode } from 'react';

interface CheckboxProps {
    className: String,
    name: string,
    value?: string,
    checked: boolean,
    disabled: boolean,
    onClick?: () => void;
    onChange?: () => void;
    children?: ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, name, value, checked, disabled, onClick, onChange, children }) => {
    return (
        <label className={'frm-checkbox ' + className}>
            <input
                type="checkbox"
                name={name}
                value={value}
                className='checkbox'
                checked={checked}
                disabled={disabled}
                onClick={onClick}
                onChange={onChange}
            />
            <span className="label">{ children }</span>
        </label>
  );
};

export default Checkbox;