import React, { ReactNode } from 'react';

interface RadioProps {
    module: String,
    name: string,
    checked: boolean,
    disabled: boolean,
    onClick: () => void;
    children?: ReactNode;
}

const Radio: React.FC<RadioProps> = ({ module, name, checked, disabled, onClick, children }) => {
    const className = `frm-radio ${module}`;
    return (
        <label className={className}>
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