import React from 'react';
import ArticleData from '../ArticleDate/ArticleData';
import './News.css'
import {withRouter} from 'react-router-dom';




const News = props => {


  const NewsList = props.data;

  const newsPreview = NewsList.map((item, index ) => {
    let postId = parseInt(item.publishedAt.replace(/[^\d]/g, ''));
    let postUrl = item.url;

    if(postUrl.includes('https://www.')){
      postUrl = item.url.replace('https://www.', '').split('/')[0]
    }
    else if(postUrl.includes('http://')){
      postUrl = item.url.replace('http://', '').split('/')[0]
    } else {
      postUrl = item.url.replace('https://', '').split('/')[0]
    }

    let postDay = item.publishedAt.split('-')[1];
    let postMonth = item.publishedAt.split('-')[2].split('T')[0];


    if(index < props.numberPerPage) {
      return(
          <li
              onClick={() => {
                props.history.push('/all-news/news-' + postId);
                props.selectedNews(item.publishedAt)

              }
              }
              key={index}
              className="news__point">
            <h2 className="news__title line">
              {item.title}
            </h2>

            <ArticleData
                key = {index}
                source={postUrl}
                day={postDay}
                month={postMonth}
            />

          </li>
      )
    } else {
      return null
    }

  });


  return(
      <ul className="news">
        {newsPreview}
      </ul>
  )
};

export default withRouter(News);