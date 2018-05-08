import React from 'react';
import Article from './Article';

const NoticeItems = (props) => {

    console.log(props.currentPage);

    return(
        <div className="notice-items">
                <ul className="notice-itemlist">
                    
                    {props.articles.map((article, index) => {
                        return(<Article title={article.title} group={article.group} date={article.date}/>)
                    })}
                </ul>
            </div>
    )
}

export default NoticeItems;