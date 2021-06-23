import React from 'react'
import './Chat.css'
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_info">
                    <h3>Room name</h3>
                    <p>Last seen at</p>
                </div>
                <div className="chat_right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            .
        </div>
    )
}

export default Chat
