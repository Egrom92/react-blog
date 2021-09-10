import React from 'react';

import News from '../News/News';
import HeroTitle from '../HeroTitle/HeroTitle';

import './HomePage.css'
import AppData from '../AppData'

const HomePage = props => {

    return(
        <section className='main-section'>
            <div className="container">


                <HeroTitle
                    pageTitle={AppData.pageTitle.home}
                />

                <News
                    numberPerPage={6}
                    selectedNews = {props.selectedNews}
                    data={props.data}
                />

                <div className="subscribe">
                    {AppData.pageTitle.newsArchive}
                </div>

            </div>
        </section>
    )
};

export default HomePage;