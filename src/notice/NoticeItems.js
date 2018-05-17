import React, { Component } from 'react';
import Article from './Article';

const emptyNotice = (
    <div className="notice-noitem-caption">
        조건에 맞는 게시물이 없습니다.
    </div>
)

const NoticeItems = (props) => {
    return(
        <div className="notice-items">
            <ul className="notice-itemlist">
                
                {props.articles.length > 0 ? props.articles.map((article, index) => {
                    return(<Article title={article.title} group={article.group} date={article.date} href={article.href}/>)
                }): emptyNotice}
            </ul>
        </div>
    )

}

export default NoticeItems;