import React from 'react';

const PageButton = (props) => {

    if(props.active) {
        return(
            <div className="paginator-btn active-btn" key={props.pagenumber}>
                {props.pagenumber}
            </div>
        )
    }
    return(
        <div className="paginator-btn" onClick={(e) => props.clickHandler(e, props.pagenumber)} key={props.pagenumber}>
            {props.pagenumber}
        </div>
    )
}

export default PageButton;
