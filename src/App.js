import React, {useState, useEffect} from 'react';
import AppData from './components/AppData'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/HomePage';
import SingleNews from './components/SingleNews/SingleNews';
import AllNews from './components/AllNews/AllNews';

import {Route} from 'react-router-dom'


const App = () => {

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=87497a5df78c4c03af970d781dad2807';
    const req = new Request(url);

    useEffect(() => {
        fetch(req)
            .then(response => response.json())
            .then(data => {
                updateData(data.articles);
            })
    }, [req]);


    const [newsData, updateData] = useState([]);

    const [postId, setPostId] = useState([]);


    const getPost = date => {
        const checkNews = newsData.filter(item => item.publishedAt === date);
        setPostId(checkNews)
    };


    return (
        <div>
            <Header
                logo={AppData.app.logo}
            />
            <Route
                path='/'
                exact
                activeClassName={'active'}
                render={() => <HomePage
                    selectedNews={getPost}
                    data={newsData}
                />}
            />
            <Route
                path='/all-news'
                exact
                activeClassName={'active'}
                render={() => <AllNews
                    selectedNews={getPost}
                    data={newsData}
                />}
            />
            <Route
                path='/contact'
                exact
                render={() => <Contact
                    phone={AppData.author.phone}
                    name={AppData.author.name}
                    lastName={AppData.author.lastName}
                    mail={AppData.author.mail}
                    position={AppData.author.position}
                    skills={AppData.skills}
                />}
            />
            <Route path='/all-news/:name' extact render={() => <SingleNews selectedPost={[...postId]} />}/>


            <Footer
                logo={AppData.app.logo}
                description={AppData.app.logoDesc}
                name={AppData.author.name}
                lastName={AppData.author.lastName}
            />
        </div>
    )
};

export default App;