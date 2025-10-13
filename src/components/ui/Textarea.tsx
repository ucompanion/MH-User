import React, { ReactNode } from 'react';

interface TextareaProps {
    className: string,
    type?: string,
    name?: string,
    id?: string,
    cols?: number,
    rows?: number,
    value? : string,
    hasByte? : boolean,
    totalByte? : number,
    placeholder? : string,
    disabled?: boolean,
    onClick?: () => void;
    children?: ReactNode;
}

const Textarea: React.FC<TextareaProps> = ({
    className,
    name,
    id,
    cols,
    rows,
    value,
    hasByte = false,
    totalByte,
    placeholder,
    disabled = false,
    onClick,
    children
}) => {
    return (
        <div className={'frm-input ' + className}>
            <textarea
                cols={cols}
                rows={rows}
                name={name}
                id={id}
                className='textarea'
                placeholder={placeholder}
                disabled={disabled}
                onClick={onClick}
            >
                {value}
            </textarea>
            { hasByte && <p className='bytes'><span className="count">0</span> / <span className="total">{totalByte}Bytes</span></p> }
            {children}
        </div>
  );
};

export default Textarea;