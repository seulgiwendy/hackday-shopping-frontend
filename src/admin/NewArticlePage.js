import React, { Component } from 'react';
import './adminpage.css';
import '../../node_modules/tui-editor/dist/tui-editor.css';
import '../../node_modules/tui-editor/dist/tui-editor-contents.css';
import DropZone from 'react-dropzone';
import GroupCheckbox from './GroupCheckbox';

class NewArticlePage extends Component {

    constructor(props) {
        super(props);
        this.editor;
        this.editorContainerRef;
        this.fileTypes = "application/vnd.ms-excel, text/plain, text/csv, text/tab-separated-values";

        this.onEditorContentChange = this.onEditorContentChange.bind(this);

        this.state = {
            targetGroups: [],
            wordCount: 0
        }
    }

    onGroupCheckChanged(event) {
        let checkedGroup = [];
        document.querySelectorAll('*[id^="group-"]').forEach((v, i) => {
            if (v.checked) {
                checkedGroup.push(v.id);
            }
        });

        console.log(checkedGroup);
    }

    onEditorContentChange() {
        this.setState({
            wordCount: this.editor.getMarkdown().length
        })
    }

    componentDidMount() {
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
                    callback('https://s3.ap-northeast-2.amazonaws.com/seulgiwendy.github.io-static/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-12-08+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+3.04.11.png', 'test');
                }
            }
        });
    }

    render() {
        return(
            <div className="articlewrite-container">
                <h3 className="articlewrite-pagetitle">새 공지사항</h3>
                <GroupCheckbox onCheckPressed={this.onGroupCheckChanged.bind(this)}/>
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
                        <DropZone accept={this.fileTypes} className="fileupload-dropzone">
                        &nbsp;
                            <div className="dropzone-element fileupload-dropzone-caption">파일을 이곳에 드래그 앤 드롭 하세요.</div>
                            <button className="dropzone-element fileupload-dropzone-click">클릭해서 파일 탐색</button> 
                        </DropZone>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default NewArticlePage;