import React from 'react';
import Article from './Article';

const NoticeItems = (props) => {
    return(
        <div className="notice-items">
                <ul className="notice-itemlist">
                    <Article title="김준현 설렁탕 특으로 먹는다" group="A그룹" date="2018.05.01"/>
                    <Article title="김준현 설렁탕 특으로 먹는다" group="A그룹" date="2018.05.01"/>
                    <Article title="김준현 설렁탕 특으로 먹는다" group="A그룹" date="2018.05.01"/>
                    <Article title="김준현 설렁탕 특으로 먹는다" group="A그룹" date="2018.05.01"/>
                    <Article title="김준현 설렁탕 특으로 먹는다" group="A그룹" date="2018.05.01"/>
                </ul>
            </div>
    )
}

export default NoticeItems;