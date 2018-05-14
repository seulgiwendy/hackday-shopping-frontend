import React from 'react';

const FileItem = (props) => {
    return(
        <div className="uploaded-files">
            <span className="fas fa-file-archive attached-icon"/>{props.filename}
        </div>
    )
}

export default FileItem;