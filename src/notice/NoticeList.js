import React from 'react';
import './notice.css';
import NoticeItems from './NoticeItems';

const NoticeList = (props) => {
    return(
        <div className="notice-container">
            <div className="notice-header">
                <div className="notice-header-caption">
                    <h3 className="notice-title">공지사항</h3>
                </div>
                <div className="notice-header-icons">
                    <ul>
                        <li className="notice-categories active">A그룹</li>
                        <li className="notice-categories">B그룹</li>
                        <li className="notice-categories">C그룹</li>
                    </ul>
                </div>
            </div>
            <NoticeItems/>
        </div>
    )
}

export default NoticeList;