import React from 'react';
import './article.css';

const ArticlePage = (props) => {
    return (
        <div className="article-container">    
            <div className="article-content-body">
                <div className="article-title">
                    <div className="title-caption">
                        김준현 설렁탕 특으로 먹는다
                    </div>
                </div>
                <div className="article-contents">
                    <div className="article-timestamp">
                        등록일자 : 2018.05.01
                    </div>
                    <div className="article-contents-text">
                        네이버 ㅎㅇ.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage;