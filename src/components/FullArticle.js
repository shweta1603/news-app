//not working X
import React from 'react';                //rfc
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card} from 'react-bootstrap';


// function FullArticle({tech}) {  
//function FullArticle({posts}) {
function FullArticle({news}) {
    const {index} = useParams()
    const singleNews = news[index]
     //console.log(index)
    return (
        <div style={{textAlign: 'start',  display: 'flex', justifyContent: 'center'}}>
            <Card style={{ width: '70%' }}>
            <Card.Title style={{ fontSize: '50px'}}>{singleNews.title}</Card.Title>
            <div style={{ marginLeft: '10px'}}>
            <p>{singleNews.author ? "By: ":""} {singleNews.author}   <a href={singleNews.url}>souce url</a></p>    
            <p>{singleNews.publishedAt}</p>
            </div> 
            <div>{singleNews.description}</div>
                <Card.Img variant="top" src={singleNews.urlToImage} style={{padding: '10%'}}/>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {singleNews.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    
    );
}

export default FullArticle;
