import React, { Component } from 'react';
import './notice.css';
import NoticeItems from './NoticeItems';
import Paginator from './Paginator';
import GroupButton from './GroupButton';
import GroupMenu from './GroupMenu';

class NoticeList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            pageSize: 3,
            totalPages: 5,
            currentArticles: [],
            groups: this.props.groups
        }
        this.onPaginatorButtonClick = this.onPaginatorButtonClick.bind(this);
        this._fetchArticles = this._fetchArticles.bind(this);
    }

    _fetchArticles() {
        let header = new Headers();
        header.append('Authorization', `Bearer ${this.props.token}`);
        header.append('Content-Type', 'application/json;utf8');

        fetch('http://localhost:8080/api/v1/articlelist', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                itemPerPage: this.state.pageSize,
                currentPage: this.state.currentPage
            })
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
            this.setState({
                currentArticles: json.items,
                totalPages: json.totalPageRequested
            });
        })
    }

    onPaginatorButtonClick(event, pagenumber) {
        this.setState({
            currentPage: pagenumber
        });
    }

    onGroupButtonClick() {

    }

    componentDidMount() {
        this._fetchArticles();
    }

    render() {
        console.log(this.state.currentArticles);
        return(
            <div className="notice-container">
                <div className="notice-header">
                    <div className="notice-header-caption">
                        <h3 className="notice-title">공지사항</h3>
                    </div>
                    <GroupMenu groups={this.props.groups}/>
                </div>
                <NoticeItems articles={this.state.currentArticles} currentPage={this.state.currentPage}/>
                <Paginator totalPage={this.state.totalPages} currentPage={this.state.currentPage + 1} clickHandler={this.onPaginatorButtonClick}/>
            </div>
        )
    }
}

export default NoticeList;