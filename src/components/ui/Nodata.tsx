import React from 'react';

interface NodataProps {
    name: string;
    title?: string;
    summary?: string;
}

const Nodata: React.FC<NodataProps> = ({ name, title, summary }) => {
    const className = `nodata ${name}`;
    return (
        <div className='nodata-wrap'>
            <div className={className}>
                <p className='nodata-title'>{title}</p>
                <p className='nodata-summary'>{summary}</p>
            </div>
        </div>
    );
};

export default Nodata;