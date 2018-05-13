import React, { Component } from 'react';
import './join.css';
import GroupSelecetor from '../group/GroupSelector';

const testGroups = [
    {name: 'A그룹', code: 'GROUP_A', description: '그룹 설정 테스트를 위한 더미 데이터'},
    {name: 'B그룹', code: 'GROUP_B', description: '그룹 설정 테스트를 위한 더미 데이터'},
    {name: 'C그룹', code: 'GROUP_C', description: '그룹 설정 테스트를 위한 더미 데이터'}
]

class JoinBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedGroups: [],
            idInput: '',
            pwdInput: '',
            pwdCheck: '',
            isValidPwd: false
        }
        this.onInputEvent = this.onInputEvent.bind(this);
        this.onGroupSelectEvent = this.onGroupSelectEvent.bind(this);
    }

    onInputEvent(e) {
        if(e.target.id === 'idinput') {
            this.setState({
                idInput: e.target.value
            });
        }
        console.log(e.target)
    }

    onGroupSelectEvent(e) {
        let currentSelectGroups = this.state.selectedGroups;

        if(e.target.checked) {
           this.setState({
               selectedGroups: [...currentSelectGroups, e.target.id]
           });
        }
        else {
            this.setState({
                selectedGroups: currentSelectGroups.filter(item => item !== e.target.id)
            });
        }
    }

    render() {
        return(
            <div className="login-container join-container">
                <div className="join-title">
                    회원 가입
                </div>
                <div className="join-formbox">
                    <form>
                        <div className="join-textbox input-group">
                            <span className="input-group-addon" id="idinput-caption">@</span>
                            <input className="join-input join-idinput form-control" type="text" placeholder="ID" id="idinput" aria-describedby="idinput-caption" onChange={this.onInputEvent}/>
                        </div>
                        <div className="join-textbox input-group">
                            <span className="input-group-addon" id="pwdinput-caption">비밀번호</span>
                            <input className="join-input join-pwdinput form-control" type="password" placeholder="PWD" id="pwdinput"onChange={this.onInputEvent}/>
                        </div>
                        <div className="join-textbox input-group">
                            <span className="input-group-addon" id="pwdcheck-caption">비밀번호 확인</span>
                            <input className="join-input join-pwdinput join-pwdcheck form-control" type="password" placeholder="pwd check" id="pwdcheck"onChange={this.onInputEvent}/>   
                        </div>
                    </form>
                </div>
                <GroupSelecetor groups={testGroups} onSelectHandler={this.onGroupSelectEvent}/>
                <div className="join-submit">
                    <button className="join-submitbtn btn btn-success">가입</button>
                </div>
            </div>
        )
    }
}

export default JoinBox;