import React, { Component } from 'react';

import NewChatSubscription from '../subscriptions/chatSubscription.js';

export default class Feed extends Component {
    componentDidMount(){
        NewChatSubscription();
    }
    render(){
        return (
            <div>
                Chat
            </div>
        )
    }
}