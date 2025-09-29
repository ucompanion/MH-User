import React from 'react';
import Icon from './Icon';

interface IconProps {
  val: string;
}

const SearchForm: React.FC<IconProps> = ({ val }) => {
    return (
        <div className='srch-frm'>
            <label htmlFor="srchInput" className='blind'>Enter search term</label>
            <input type="search" id='srchInput' value={val} placeholder='気になる施術や病院名はありますか？' className='input' />
            <button type='button' className='btn btn-srch'>
                <Icon name='icn-srch' />
                <span className="blind">Search</span>
            </button>
        </div>
    );
};

export default SearchForm;