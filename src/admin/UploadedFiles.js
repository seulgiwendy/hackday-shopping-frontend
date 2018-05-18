import React from 'react';
import FileItem from './FileItem';

const UploadedFiles = (props) => {
    if(props.articlePage) {
        return(
        <div className="fileupload-uploaded">
            {props.files.map(p => {
                return <FileItem filename={p.path} href={p.storeFilePath}/>
            })}
        </div>
        );
    }

    else {
        return(
            <div className="fileupload-uploaded">
                {props.files.map(p => {
                    return <FileItem filename={p.originalFileName} href={p.encodedFileName}/>
                })}
            </div>
        );
    }
}

export default UploadedFiles;