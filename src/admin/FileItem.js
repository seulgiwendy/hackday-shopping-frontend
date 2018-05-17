import React from 'react';

const FileItem = (props) => {
    return(
        <div className="uploaded-files">
            <span className="fas fa-file-archive attached-icon"/><a href={`http://cdn.wheejuni.com${props.href}`}>{props.filename}</a>
        </div>
    )
}

export default FileItem;