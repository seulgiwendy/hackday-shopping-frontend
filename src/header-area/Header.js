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
    }

    onNametagClick() {
        this.setState({
            unreadNotifications: 0,
            dropdownExpanded: !this.state.dropdownExpanded
        });
    }
    
    render() {
        console.log(this.state.dropdownExpanded);
        return(
            <header className="app-header">
              <HeaderLogos/>
              <HeaderNotification name={this.props.username} handler={this.onNametagClick} expanded={this.state.dropdownExpanded} newCount={this.state.unreadNotifications}/>
            </header>
        )
    }
}

export default Header;