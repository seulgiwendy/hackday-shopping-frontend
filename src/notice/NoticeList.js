import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './notice.css';
import NoticeItems from './NoticeItems';
import Paginator from './Paginator';
import GroupButton from './GroupButton';
import GroupMenu from './GroupMenu';

class NoticeList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            pageSize: 3,
            totalPages: 5,
            groups: this.props.groups,
            articles: []
        }
        this.onPaginatorButtonClick = this.onPaginatorButtonClick.bind(this);
        this.onLoadingPageCount = this.onLoadingPageCount.bind(this);
        this._fetchList = this._fetchList.bind(this);
    }

    _fetchList() {
        let header = new Headers();
        header.append('Authorization', `Bearer ${this.props.token}`);
        header.append('Content-Type', 'application/json;utf8');

        fetch('http://adm-api.wheejuni.com/api/v1/articlelist', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                itemPerPage: 3,
                currentPage: this.state.currentPage - 1
            })
        }).then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                totalPages: json.totalPageRequested,
                articles: json.items
            })
        });
    }

    _fetchSingleList(page) {
        let header = new Headers();
        header.append('Authorization', `Bearer ${this.props.token}`);
        header.append('Content-Type', 'application/json;utf8');

        return fetch('http://adm-api.wheejuni.com/api/v1/articlelist', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                itemPerPage: 3,
                currentPage: page - 1
            })
        }).then(res => {
            return res.json();
        }).then(json => {
            return json.items
        });
        
    }

    onLoadingPageCount(maxPage) {
        this.setState({
            totalPages: maxPage
        });
    }

    async onPaginatorButtonClick(event, pagenumber) {
        let fetchedArticles = await this._fetchSingleList(pagenumber);

        this.setState({
            currentPage: pagenumber,
            articles: fetchedArticles
        });
        
    }

    componentDidMount() {
        this._fetchList();
    }

    render() {
        return(
            <div className="notice-container">
                <div className="notice-header">
                    <div className="notice-header-caption">
                        <h3 className="notice-title">공지사항</h3>
                        
                    </div>
                    <GroupMenu groups={this.props.groups}/>
                </div>
                <div className="notice-items-group">
                    <NoticeItems articles={this.state.articles}/>
                    <Link to='/admin' className="notice-title-write">공지사항 작성하기</Link>
                </div>
                <Paginator totalPage={this.state.totalPages} currentPage={this.state.currentPage} clickHandler={this.onPaginatorButtonClick}/>
            </div>
        )
    }
}

export default NoticeList;