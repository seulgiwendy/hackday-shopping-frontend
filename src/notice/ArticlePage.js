import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import FileItem from '../admin/FileItem';
import ArticleContent from './ArticleContent';
import './article.css';
import UploadedFiles from '../admin/UploadedFiles';
import EditButtons from './EditButtons';


class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            registeredDate: '',
            files: [],
            editable: false,
            editmode: false
        };
        this.contentAreaRef;
        this.viewer; 

        this._fetchContent = this._fetchContent.bind(this);
        this.onArticleEdit = this.onArticleEdit.bind(this);
    }

    _fetchContent(id, token) {

        let header = new Headers();
        header.append('Authorization', `Bearer ${token}`);

        fetch(`http://adm-api.wheejuni.com/api/v1/article?id=${id}`, {
            method: 'GET',
            headers: header
        }).then(response => {
            return response.json();
        }).then(json => {
            this.setState({
                title: json.title,
                registeredDate: json.lastModifiedAt,
                files: json.files,
                editable: json.editable
            });
            this.viewer.setMarkdown(json.content);
        });

        this.viewer.setValue('*value changed*');
    }

    onArticleDelete() {

    }

    onArticleEdit() {
        this.setState({
            editmode: true
        });
    }

    componentDidMount() {
        let articleId = this.props.routeinfo.params.id;
        let userToken = this.props.token;

        let Editor = require('tui-editor');
        this.viewer = new Editor.factory({
            el: this.contentAreaRef,
            viewer: true,
            height: '300px',
            initialValue: 'ㅎㅇㅎㅇㅎㅇㅎㅇ'
        });

        this._fetchContent(articleId, userToken);
    }
    render() {
        if(this.state.editmode) {
            return(
                <Redirect to={`/edit/${this.props.routeinfo.params.id}`}/>
            )
        }
        return(
        <div className="article-container">    
            <div className="article-content-body">
                <div className="article-title">
                    <div className="title-caption">
                        {this.state.title}
                    </div>
                </div>
            <div className="article-contents">
                <div className="article-timestamp">
                        <div className="article-writetime">{this.state.registeredDate}</div>
                </div>
                <div className="article-contents-text" ref={ref => this.contentAreaRef = ref}>
                    
                </div>
            </div>
            <div className="article-file-contents">
                <h3 className="filecontents-caption">첨부된 파일</h3>
                <UploadedFiles files={this.state.files} articlePage={true}/>
            </div>
            {this.state.editable ? <EditButtons edit={this.onArticleEdit} delete={this.onArticleDelete}/> : undefined}

            </div>
        </div>
        )
    }
}

export default withRouter(ArticlePage);