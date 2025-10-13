import React, { ReactNode } from 'react';

interface InputProps {
    className: string,
    type?: string,
    name?: string,
    id?: string,
    value? : string,
    placeholder? : string,
    disabled?: boolean,
    onClick?: () => void;
    children?: ReactNode;
}

const Input: React.FC<InputProps> = ({
    className,
    type = 'text',
    name,
    id,
    value,
    placeholder,
    disabled = false,
    onClick,
    children
}) => {
    return (
        <div className={'frm-input ' + className}>
            <input
                type={type}
                name={name}
                id={id}
                className='input'
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onClick={onClick}
            />
            {children}
        </div>
  );
};

export default Input;