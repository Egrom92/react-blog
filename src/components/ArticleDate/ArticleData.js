import React from 'react';
import './ArticleData.css'

const ArticleData = props => {

    return(
        <div className="articleData">
            <a href={`https://www.${props.source}`} target='_blank' rel="noreferrer noopener" className="articleData__source">
                {props.source}
            </a>
            <div className="articleData__date">
                <span className="articleData__day">
                    {props.day}
                </span>
                <span className="articleData__month">
                    {props.month}
                </span>
            </div>
        </div>
    )
};

export default ArticleData;