import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            modifiedContent: '',
            wordCount: 0,
            submitFinished: false
        }

        this.editor;
        this.editorContainerRef;

        this.onSubmitClick = this.onSubmitClick.bind(this);
        
    }

    _updateArticle(data) {
        let authHeader = new Headers();
        authHeader.append("Content-Type", 'application/json');
        authHeader.append('Authorization', `Bearer ${this.props.token}`);

        fetch('http://adm-api.wheejuni.com/api/v1/article/update', {
            method: 'POST',
            headers: authHeader,
            body: JSON.stringify(data)
        }).then((res, error) => {
            if(error){
                window.alert(error);
                return;
            }
            this.setState({
                submitFinished: true
            });
            window.alert('공지사항이 수정되었습니다.');
        });

    }

    _fetchOriginalContent() {
        let tokenHeader = new Headers();
        tokenHeader.append('Authorization', `Bearer ${this.props.token}`);

        fetch(`http://adm-api.wheejuni.com/api/v1/article?id=${this.props.target.id}`, {
            method: 'GET',
            headers: tokenHeader
        }).then(res => {
            return res.json();
        }).then(json => {
            this.editor.setMarkdown(json.content);
        })
    }

    _uploadImage(file) {
        let data = new FormData();

        data.append('files', file);

        let upload = undefined;
        
        return fetch('http://adm-api.wheejuni.com/api/upload/image', {
            method: 'POST',
            body: data
        }).then(response => {
            return response.json();
        });
    }

    onSubmitClick() {
        let editedContent = this.editor.getMarkdown();

        let body = {
            original_id: this.props.target.id,
            requestType: 'UPDATE',
            content: editedContent
        }

        this._updateArticle(body);
    }

    async onImageUpload(image) {
        var result = await this._uploadImage(image);
        return result;
    }

    componentDidMount() {
        let Editor = require('tui-editor');

        this.editor = new Editor({
            el: this.editorContainerRef,
            initialEditType: 'wysiwyg',
            hideModeSwitch: true,
            previewStyle: 'vertical',
            height: '500px',
            hooks: {
                addImageBlobHook: (blob, callback, source) => {
                    var result = this.onImageUpload(blob);

                    result.then(link => {
                        callback(`http://cdn.wheejuni.com${link.encodedFileName}`, 'image');
                    })
                }
            }
        });

        this._fetchOriginalContent();
    }

    render() {
        if(this.state.submitFinished) {
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div className="articlewrite-container">
                <h3 className="articlewrite-pagetitle">공지사항 수정</h3>
                <div className="articlewrite-editor-container" ref={ref => this.editorContainerRef = ref}>
                    
                </div>
                <div className="articlewrite-wordcount">
                    <h3 className="word-count">{this.state.wordCount}/1000</h3>
                </div>
                <div className="articlewrite-submit">
                    <button className="btn btn-success" onClick={this.onSubmitClick}>공지사항 등록</button>
                </div>
            </div>
        )
    }

}

export default EditArticlePage;