import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './adminpage.css';
import '../../node_modules/tui-editor/dist/tui-editor.css';
import '../../node_modules/tui-editor/dist/tui-editor-contents.css';
import DropZone from 'react-dropzone';
import GroupCheckbox from './GroupCheckbox';
import UploadedFiles from './UploadedFiles';

class NewArticlePage extends Component {

    constructor(props) {
        super(props);
        this.editor;
        this.editorContainerRef;
        this.uploadedImage;
        this.fileTypes = "application/vnd.ms-excel, text/plain, text/csv, text/tab-separated-values, image/png";

        this.onEditorContentChange = this.onEditorContentChange.bind(this);
        this.onGroupCheckChanged = this.onGroupCheckChanged.bind(this);
        this.onFileDrop = this.onFileDrop.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.setAvailableGroups = this.setAvailableGroups.bind(this);
        this._fetchGroups = this._fetchGroups.bind(this);
        this._uploadImage = this._uploadImage.bind(this);
        this._uploadArticle = this._uploadArticle.bind(this);

        this.state = {
            writable: true,
            availableGroups: [],
            targetGroups: "A_GROUP",
            uploadedFiles: [],
            uploadedImage: undefined,
            articleTitle: 'untitled',
            wordCount: 0
        }
    }

    _fetchGroups() {
        return fetch('http://adm-api.wheejuni.com/api/info/available-groups')
        .then(response => {
            return response.json()});

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

    _uploadArticle(data) {
        console.log(data);

        let customHeader = new Headers();
        customHeader.append('Content-Type', 'application/json;utf8');
        customHeader.append('Authorization', `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVU0VSX1RBUkdFVEdST1VQUyI6WyJDX0dST1VQIiwiQl9HUk9VUCJdLCJVU0VSTkFNRSI6IuydtOunkOuFhCIsIlVTRVJfSUQiOjIsIlVTRVJfUk9MRSI6IlJPTEVfVVNFUiJ9.8m1EPL5gjVKci4_asZ2wGeBF_tc961AT8oEuTlWMiis`)

        fetch('http://adm-api.wheejuni.com/api/v1/article', {
            method: 'POST',
            headers: customHeader,
            body: JSON.stringify(data)
        }).then((res, error) => {
            if(error) {
                console.error(error);
            }
            console.log(res);
        })
    }

    onGroupCheckChanged(event) {
        console.log(event.target.value);
        this.setState({
            targetGroups: event.target.value
        })
    }

    onEditorContentChange() {
        this.setState({
            wordCount: this.editor.getMarkdown().length
        })
    }

    onFileDrop(files) {
        let currentFiles = this.state.uploadedFiles;
        let data = new FormData();

        data.append('files', files[0]);

        fetch('http://adm-api.wheejuni.com/api/upload/file', {
            method: 'POST',
            body: data
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            this.setState({
                uploadedFiles: [...currentFiles, json]
            });
        }).catch(err => {
            console.log(err);
        });
    }

    onTitleChange(event) {
        this.setState({
            articleTitle: event.target.value
        });
    }

    onSubmitClick() {
        let articleContent = this.editor.getMarkdown();

        let body = {
            title: this.state.articleTitle,
            content: articleContent,
            targetGroups: this.state.targetGroups,
            fileHref: this.state.uploadedFiles 
        }

        this._uploadArticle(body);
    }

    async onImageUpload(image) {
        var result = await this._uploadImage(image);
        return result;
    }

    async setAvailableGroups() {
        let result = await this._fetchGroups();
        console.log(result);
        this.setState({
            availableGroups: result,
            targetGroups: result[0].type
        });
    }

    componentDidMount() {
        this.setAvailableGroups();
        let Editor = require('tui-editor');

        this.editor = new Editor({
            el: this.editorContainerRef,
            initialEditType: 'wysiwyg',
            hideModeSwitch: true,
            previewStyle: 'vertical',
            height: '500px',
            events: {
                change: this.onEditorContentChange
            },
            hooks: {
                addImageBlobHook: (blob, callback, source) => {
                    var result = this.onImageUpload(blob);

                    result.then(link => {
                        console.log(link);
                        callback(`file://${link.encodedFileName}`, 'image');
                    })
                }
            }
        });
    }

    render() {
        return(
            <div className="articlewrite-container">
                <h3 className="articlewrite-pagetitle">새 공지사항</h3>
                <GroupCheckbox groups={this.state.availableGroups} onCheckPressed={this.onGroupCheckChanged.bind(this)} title={this.onTitleChange}/>
                <div className="articlewrite-editor-container" ref={ref => this.editorContainerRef = ref}>
                    
                </div>
                <div className="articlewrite-wordcount">
                    <h3 className="word-count">{this.state.wordCount}/1000</h3>
                </div>
                <div className="articlewrite-fileupload-container">
                    <div className="fileupload-header">
                        <h3 className="fileupload-title">파일 업로드</h3>
                        <p className="fileupload-caption">파일은 5MB 이하의 xlsx, xls, txt, csv, tsv만 업로드하실 수 있습니다.</p>
                    </div>
                    <div className="fileupload-component">
                        <DropZone accept={this.fileTypes} onDrop={this.onFileDrop} className="fileupload-dropzone">
                        &nbsp;
                            <div className="dropzone-element fileupload-dropzone-caption">파일을 이곳에 드래그 앤 드롭 하세요.</div>
                            <button className="dropzone-element fileupload-dropzone-click">클릭해서 파일 탐색</button> 
                        </DropZone>
                    </div>
                    <UploadedFiles files={this.state.uploadedFiles}/>
                </div>
                <div className="articlewrite-submit">
                    <button className="btn btn-success" onClick={this.onSubmitClick}>공지사항 등록</button>
                </div>
            </div>
        )
    }
    
}

export default withRouter(NewArticlePage);