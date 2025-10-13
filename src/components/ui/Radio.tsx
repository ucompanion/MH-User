import React, { ReactNode } from 'react';

interface RadioProps {
    className: String,
    name: string,
    checked: boolean,
    disabled: boolean,
    onClick: () => void;
    children?: ReactNode;
}

const Radio: React.FC<RadioProps> = ({ className, name, checked, disabled, onClick, children }) => {
    return (
        <label className={'frm-checkbox ' + className}>
            <input
                type="radio"
                className='radio'
                name={name}
                checked={checked}
                disabled={disabled}
                onClick={onClick}
            />
            <span className="label">{ children }</span>
        </label>
  );
};

export default Radio;