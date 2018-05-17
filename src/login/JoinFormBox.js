import React from 'react';

const JoinFormBox = (props) => {
    return(
        <div className="join-formbox">
            <form>
                <div className="join-textbox input-group">
                    <span className="input-group-addon" id="nameinput-caption">이름</span>
                    <input className="join-input join-nameinput form-control" type="text" placeholder="이름을 입력하세요" id="nameinput" aria-describedby="nameinput-caption" onChange={props.onInputEvent}/>
                </div>
                <div className="join-textbox input-group">
                    <span className="input-group-addon" id="idinput-caption">@</span>
                    <input className="join-input join-idinput form-control" type="text" placeholder="ID" id="idinput" aria-describedby="idinput-caption" onChange={props.onInputEvent}/>
                </div>
                <div className="join-textbox input-group">
                    <span className="input-group-addon" id="pwdinput-caption">비밀번호</span>
                    <input className="join-input join-pwdinput form-control" type="password" placeholder="PWD" id="pwdinput"onChange={props.onInputEvent}/>
                </div>
                <div className="join-textbox input-group">
                    <span className="input-group-addon" id="pwdcheck-caption">비밀번호 확인</span>
                    <input className="join-input join-pwdinput join-pwdcheck form-control" type="password" placeholder="pwd check" id="pwdcheck"onChange={props.onInputEvent}/>   
                </div>
            </form>
        </div>
    )
}

export default JoinFormBox;