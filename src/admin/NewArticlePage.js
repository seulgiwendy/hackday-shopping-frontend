import React, { Component } from 'react';
import './adminpage.css';
import '../../node_modules/tui-editor/dist/tui-editor.css';
import '../../node_modules/tui-editor/dist/tui-editor-contents.css';
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
            </div>
        )
    }
    
}

export default NewArticlePage;