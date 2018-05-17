import React, { Component } from 'react';
import './header.css';
import HeaderLogos from './HeaderLogos';
import HeaderNotification from './HeaderNotification';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownExpanded: false,
            notifications: [],
            unreadNotifications: 3
        }
        this.onNametagClick = this.onNametagClick.bind(this);
        this._fetchNotification = this._fetchNotification.bind(this);
        this._flushNotification = this._flushNotification.bind(this);
    }

    _fetchNotification() {
        fetch(`http://adm-api.wheejuni.com/api/event/staticevent/${this.props.userid}`)
        .then(res => {
            console.log(res);
            return res.json();
        }).then(json => {
            console.log(json);
            this.setState({
                unreadNotifications: json.unreadNotificationsCount,
                notifications: json.notifications
            })
        })
    }

    _flushNotification() {
        let idArray = this.state.notifications.map(v => v.NOTIFICATION_ID);
        console.log(idArray);

        let header = new Headers();
        header.append('Content-Type', 'application/json');

        fetch(`http://adm-api.wheejuni.com/api/event/flush/${this.props.userid}`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(idArray)
        })
    }

    onNametagClick() {
        this._flushNotification();
        this.setState({
            unreadNotifications: 0,
            dropdownExpanded: !this.state.dropdownExpanded
        });
    }

    componentDidMount() {
        this._fetchNotification();
    }
    
    render() {
        console.log(this.state.unreadNotifications);
        return(
            <header className="app-header">
              <HeaderLogos/>
              <HeaderNotification name={this.props.username} handler={this.onNametagClick} expanded={this.state.dropdownExpanded} newCount={this.state.unreadNotifications} items={this.state.notifications}/>
            </header>
        )
    }
}

export default Header;