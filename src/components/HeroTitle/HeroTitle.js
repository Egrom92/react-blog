import React from 'react';

import './HeroTitle.css'

const HeroTitle = props => {

    const text = props.pageTitle.split(' ');
    const startOfTitle = text.slice(0, -1).join(' ');
    const endOfTitle = text[text.length -1];


    return(
        <h1 className="title">
            <span className="default-title">
                {startOfTitle}
            </span>
            <span className='blue-title'>
                {endOfTitle}
            </span>
        </h1>
    )
};

export default HeroTitle;