import React from 'react';

const viewer = (ref, content) => {
    let Editor = require('tui-editor');
    let viewer = new Editor.factory({
        el: ref,
        viewer: true,
        height: '300px',
        initialValue: 'ㅎㅇㅎㅇㅎㅇㅎㅇ'
    });
}

const ArticleContent = (props) => {
    console.log(props.ref);
    viewer(props.ref, props.content);
    return(
        <div/>
    );
}

export default ArticleContent;