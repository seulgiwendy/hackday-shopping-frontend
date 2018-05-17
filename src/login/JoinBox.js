import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './join.css';
import GroupSelector from '../group/GroupSelector';
import JoinFormBox from './JoinFormBox';
import LoginBox from './LoginBox';

class JoinBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            availableGroups: [],
            selectedGroups: [],
            nameInput: '',
            idInput: '',
            pwdInput: '',
            pwdCheck: '',
            isValidPwd: false,
            redirect: false
        }
        this.onInputEvent = this.onInputEvent.bind(this);
        this.onGroupSelectEvent = this.onGroupSelectEvent.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.checkPwdIntegrity = this.checkPwdIntegrity.bind(this);
        this._fetchGroups = this._fetchGroups.bind(this);
        this._sendJoinInfo = this._sendJoinInfo.bind(this);
    }

    _fetchGroups() {
        fetch('http://adm-api.wheejuni.com/api/info/available-groups')
        .then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
            this.setState({
                availableGroups: json
            })
        })
    }

    _sendJoinInfo() {
        let custonHeaders = new Headers();
        custonHeaders.append("Content-Type", "application/json;utf8")

        fetch('http://adm-api.wheejuni.com/api/user/join', {
            method: 'POST',
            headers: custonHeaders,
            body: JSON.stringify({
                name: this.state.nameInput,
                id: this.state.idInput,
                password: this.state.pwdInput,
                selectedGroups: this.state.selectedGroups
            })
        }).then(response => {
            window.alert('회원가입이 정상적으로 처리되었습니다.');
            this.setState({
                redirect: true
            });
        })
        .catch(err => {
            window.alert(err);
        });
    }

    onInputEvent(e) {
        let pwdInput, pwdCheck;

        switch(e.target.id) {

            case 'nameinput':
                this.setState({
                    nameInput: e.target.value
                });
                break;

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
        let name = document.getElementById('nameinput').value;

        this.setState({
            isValidPwd: pwdInput === pwdCheck && name.length > 0
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

    onSubmitEvent() {
        this._sendJoinInfo();
    }

    componentDidMount() {
        this._fetchGroups();
    }


    render() {
        if(this.state.redirect) {
            return(
                <LoginBox/>
            )
        }
        console.log(this.state.selectedGroups);
        return(
            <div className="login-container join-container">
                <div className="join-title">
                    회원 가입
                </div>
                <JoinFormBox onInputEvent={this.onInputEvent}/>
                <GroupSelector groups={this.state.availableGroups} onSelectHandler={this.onGroupSelectEvent}/>
                <div className="join-submit">
                    <Button bsStyle="success" className="join-submitbtn" disabled={!this.state.isValidPwd} onClick={this.onSubmitEvent}>가입</Button>
                </div>
            </div>
        )
    }
}

export default JoinBox;