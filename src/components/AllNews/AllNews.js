import React from 'react';

import News from '../News/News';
import HeroTitle from '../HeroTitle/HeroTitle';

import './AllNews.css'
import AppData from '../AppData';

const AllNews = props => {


    return(
        <section className='main-section'>
            <div className="container">

                <HeroTitle
                    pageTitle={AppData.pageTitle.newsArchive}
                />

                <News
                    numberPerPage={18}
                    selectedNews = {props.selectedNews}
                    data={props.data}
                />

            </div>
        </section>
    )
};

export default AllNews;