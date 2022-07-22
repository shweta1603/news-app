import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios"
import {Card,Button,Container,Col,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './newsblag.css'
import moment from 'moment'
const Home = ({posts}) => {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios
    //     .get('https://newsapi.org/v2/everything?q=Apple&from=2022-06-09&sortBy=popularity&apiKey=d694418400474964a40e4d367a921850')
    //     .then((res)=> setPosts(res.data.articles))
    //     .catch((err) => console.log(err.message))
    // }, []);


    
    return (
        <div className='container'>
            <h1>News Headlines</h1>
            <hr></hr>
            <Container>
                <Row>
                    {posts.map((post,index) => (
                        <Col md={12} className='news-cards'>
                            <Card className='card' >
                                <p className='image' style={{width: 'fit-content'}}>
                                <Card.Img variant="top" src={post.urlToImage ? post.urlToImage  : 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png'} />
                                <p style={{marginLeft: '63px'}}>{moment(post.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>  
                                </p>
                                <p className='body' style={{width: '75%', marginRight: '-302px'}}>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <hr></hr>
                                    <Card.Text>  
                                        {post.content ? post.content : post.description}
                                    </Card.Text>
                                         <a href={post.url}> Read more... </a>  
                                            <p>  {post.author ? "Author: " :""} {post.author}</p>
                                    <Link className="btn btn-dark" to={`/news-list/${index}`} variant="primary" >Full articles</Link>
                                </Card.Body>
                                </p>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>    
            {/* <Container>
                <Row>
                    {posts.map(post => (
                        <Col md={3} className='news-cards' key={post.id}>
                            <Card className='card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={post.urlToImage ? post.urlToImage  : 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png'} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        <a href={post.url}> Read more... </a>  
                                        <p>{post.publishedAt}</p>  
                                    </Card.Text>
                                    <Link className="btn btn-dark" to={`/news-list/${post.id}`} variant="primary" >Full articles</Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>       */}
        </div>
    );
}

export default Home;

