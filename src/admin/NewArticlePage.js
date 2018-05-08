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

        this.state = {
            targetGroups: []
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

    componentDidMount() {
        let Editor = require('tui-editor');

        this.editor = new Editor({
            el: this.editorContainerRef,
            initialEditType: 'wysiwyg',
            hideModeSwitch: true,
            previewStyle: 'vertical',
            height: '500px'
        });
    }

    render() {
        return(
            <div className="articlewrite-container">
                <h3 className="articlewrite-pagetitle">새 공지사항</h3>
                <GroupCheckbox onCheckPressed={this.onGroupCheckChanged.bind(this)}/>
                <div className="articlewrite-editor-container" ref={ref => this.editorContainerRef = ref}>

                </div>
                <div className="articlewrite-fileupload-container">
                    <div className="fileupload-header">
                        <h3 className="fileupload-title">파일 업로드</h3>
                        <p className="fileupload-caption">파일은 5MB 이하의 xlsx, xls, txt, csv, tsv만 업로드하실 수 있습니다.</p>
                    </div>
                    <div className="fileupload-component">
                        <DropZone className="fileupload-dropzone">
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