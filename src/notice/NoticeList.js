import React, { Component } from 'react';
import './notice.css';
import NoticeItems from './NoticeItems';
import Paginator from './Paginator';
import GroupButton from './GroupButton';
import GroupMenu from './GroupMenu';

const Group = function(name, active) {
    if(!this instanceof Group) {
        return new Group(name, active);
    }

    this.name = name;
    this.active = active;
}

Group.prototype.isActive = function() {
    return this.active;
}

const dummyGroups = ['A그룹', 'B그룹', 'C그룹'];
const dummyArticles = [
    {
        group: 'A그룹',
        title: '김준현 설렁탕 특으로 먹는다',
        date: '2018.05.01',
        id: 1
    },
    {
        group: 'A그룹',
        title: '김준현 설렁탕 특으로 먹는다',
        date: '2018.05.01',
        id: 1
    },
    {
        group: 'A그룹',
        title: '김준현 설렁탕 특으로 먹는다',
        date: '2018.05.01',
        id: 1
    }
]

class NoticeList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            totalPages: 5,
            groups: []
        }
        this.onPaginatorButtonClick = this.onPaginatorButtonClick.bind(this);
    }

    componentDidMount() {
        console.log('mount!');
        this.setState({
            groups: dummyGroups.map((v, i) => {
                if(i === 0) {
                    return new Group(v, true);
                }
                return new Group(v, false);
            })
        })
    }

    onPaginatorButtonClick(event, pagenumber) {
        this.setState({
            currentPage: pagenumber
        });
    }

    render() {
        return(
            <div className="notice-container">
                <div className="notice-header">
                    <div className="notice-header-caption">
                        <h3 className="notice-title">공지사항</h3>
                    </div>
                    <GroupMenu groups={this.state.groups}/>
                </div>
                <NoticeItems articles={dummyArticles} currentPage={this.state.currentPage}/>
                <Paginator totalPage={this.state.totalPages} currentPage={this.state.currentPage} clickHandler={this.onPaginatorButtonClick}/>
            </div>
        )
    }
}

export default NoticeList;