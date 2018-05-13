import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './join.css';
import GroupSelecetor from '../group/GroupSelector';
import JoinFormBox from './JoinFormBox';

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
        this.checkPwdIntegrity = this.checkPwdIntegrity.bind(this);
    }

    onInputEvent(e) {
        let pwdInput, pwdCheck;

        switch(e.target.id) {
            case 'idinput':
                this.setState({
                    idInput: e.target.value
                });
                break;
            case 'pwdinput':
                this.setState({
                    pwdInput: e.target.value,
                });
                break;
            case 'pwdcheck':
                pwdCheck = e.target.value;
                this.setState({
                    pwdCheck: e.target.value
                });
        }
        this.checkPwdIntegrity();
    }

    checkPwdIntegrity() {
        let pwdInput = document.getElementById('pwdinput').value;
        let pwdCheck = document.getElementById('pwdcheck').value;

        this.setState({
            isValidPwd: pwdInput === pwdCheck
        });        
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
        console.log(this.state.isValidPwd);
        return(
            <div className="login-container join-container">
                <div className="join-title">
                    회원 가입
                </div>
                <JoinFormBox onInputEvent={this.onInputEvent}/>
                <GroupSelecetor groups={testGroups} onSelectHandler={this.onGroupSelectEvent}/>
                <div className="join-submit">
                    <Button bsStyle="success" className="join-submitbtn" disabled={!this.state.isValidPwd}>가입</Button>
                </div>
            </div>
        )
    }
}

export default JoinBox;