import React from 'react';

const Article = (props) => {
    return(
        <li className="notice-article">
            <span className="notice-article-group">{props.group}</span>{props.title}
            <span className="notice-article-date">{props.date}</span>
        </li>
    )
}

export default Article;