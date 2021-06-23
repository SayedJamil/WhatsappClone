import React from 'react'
import './Chat.css'
import { IconButton, Avatar } from '@material-ui/core';
function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
            </div>
            <div className="chat_info">
                <h3>Room name</h3>
            </div>
        </div>
    )
}

export default Chat
