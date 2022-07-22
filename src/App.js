import Newblog from './components/newblog';
import './App.css';
import NavbarComponent from './components/Navbar';
import * as React from "react";
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullArticle from './components/FullArticle';
import NewList from './components/NewsList';
import axios from 'axios';
import {useEffect, useState} from 'react'
import Technology from './components/Technology';

function App() {
  const [posts, setPosts] = useState([])    
  //for all news
    useEffect(() => {    
        axios
        .get('https://newsapi.org/v2/everything?q=Apple&from=2022-06-09&sortBy=popularity&apiKey=d694418400474964a40e4d367a921850')
        .then((res)=> setPosts(res.data.articles))
        .catch((err) => console.log(err.message))
    }, []);
//National news-
  const [news, setNews] = useState([])  
  //uplifting the props(news) and later on sending props to child component which needs it in the Route 
    useEffect(() => {
        axios
        .get('http://newsapi.org/v2/top-headlines?apiKey=d694418400474964a40e4d367a921850&country=in')
        .then((res)=> setNews(res.data.articles))
        .catch((err) => console.log(err.message))
    });
//Technology news-
    const [tech, setTech] = useState([])    
    useEffect(() => {
        axios
        .get('http://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&category=technology')
        .then((res)=> setTech(res.data.articles))
        .catch((err) => console.log(err.message))
    }, []);

  return (  
    <div className='App'>
    
     <Router>
     <NavbarComponent/>
       <Routes>
       <Route path='/' element={<Home posts={posts}/>} />    {/*  everything */}
       <Route path='/:index' element={<FullArticle posts={posts}/>} /> 

       <Route path='news-list' element={<Newblog news={news}/>}/>
       <Route path='news-list/:index' element={<FullArticle news={news}/>}/>
       
       <Route path='news' element={<NewList news={news}/>}/>
       <Route path='/news/:index' element={<FullArticle news={news}/>}/>

       <Route path='news-tech' element={<Technology tech={tech}/>}/>
       <Route path='news-tech/:index' element={<FullArticle tech={tech}/>}/>
       
       </Routes>
      </Router>
    </div>
  );
}

export default App;
