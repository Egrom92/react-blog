import React from 'react';
import ArticleData from '../ArticleDate/ArticleData';

import './SingleNews.css'

import HeroTitle from '../HeroTitle/HeroTitle';


const SingleNews = props => {


    return(
        <section className='singleNews-section'>
            {console.log(props)}
            <div className="container">
                {
                    props.selectedPost.map(item =>{


                        let postUrl = item.url;
                        if(postUrl.includes('https://www.')){
                            postUrl = item.url.replace('https://www.', '').split('/')[0]
                        } else {
                            postUrl = item.url.replace('https://', '').split('/')[0]
                        }
                        let postDay = item.publishedAt.split('-')[1];
                        let postMonth = item.publishedAt.split('-')[2].split('T')[0];


                        return (
                            <div className="singleNews">

                                <div className="singleNews__data">

                                    <HeroTitle
                                        pageTitle={item.title}
                                    />

                                    <ArticleData
                                        day={postDay}
                                        month={postMonth}
                                        source={postUrl}
                                    />

                                </div>
                                <div className="singleNews__article">
                                    <img src={item.urlToImage} alt="" className="singleNews__pic"/>
                                    <div className="singleNews__text">
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default SingleNews;