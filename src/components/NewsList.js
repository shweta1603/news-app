import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios"
import {Card,Button,Container,Col,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './newsblag.css'

function NewList({news}) {
    return (
        <>
        <div>National NewsList</div>
        <ul>
            {news.map((singleNews, index) => (
                <li key={index}>      
                  <Link to={`/news/${index}`}>            {/*  /news/${index} extract single object */}
                      {singleNews.title}
                  </Link>
                </li>
            ))}
        </ul>
        </>
    )
}
export default NewList