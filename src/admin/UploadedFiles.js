import React from 'react';
import FileItem from './FileItem';

const UploadedFiles = (props) => {
    return(
        <div className="fileupload-uploaded">
            {props.files.map(p => {
                return <FileItem filename={p.originalFileName}/>
            })}
        </div>
    );
}

export default UploadedFiles;