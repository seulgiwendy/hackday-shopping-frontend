import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    return(
        <li className="notice-article">
            <span className="notice-article-group">{props.group}</span><Link to={`/article/${props.href}`}>{props.title}</Link>
            <span className="notice-article-date">{props.date}</span>
        </li>
    )
}

export default Article;