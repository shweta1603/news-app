import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios"
import {Card,Button,Container,Col,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './newsblag.css'
import moment from 'moment'

const Newblog = ({news}) => {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios
    //     .get('http://newsapi.org/v2/top-headlines?apiKey=d694418400474964a40e4d367a921850&country=in')
    //     .then((res)=> setPosts(res.data.articles))
    //     .catch((err) => console.log(err.message))
    // }, []);

    return (
        <div className='container'>
            <h1>National</h1>
            <hr></hr>
            <Container>
                <Row>
                    {news.map((post,index) => (
                        <Col md={12} className='news-cards' >
                            <Card className='card' >
                                <p className='image' >
                                <Card.Img variant="top" src={post.urlToImage ? post.urlToImage  : 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png'} />
                                <p style={{marginLeft: '63px'}}>{moment(post.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</p> 
                                
                                </p>
                                <p className='body' style={{width: '75%', marginRight: '-302px'}}>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>  
                                        {post.content ? post.content : post.description}
                                    </Card.Text>
                                         <a href={post.url}> Read more... </a>  
                                         <p> {post.author ? "Author: " :""} {post.author}</p>
                                    <Link className="btn btn-dark" to={`/news-list/${index}`} variant="primary" >Full articles</Link>
                                </Card.Body>
                                </p>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>      
        </div>
    );
}

export default Newblog;

//to formate the date install moment- 
// 'npm install moment --save' and import moment