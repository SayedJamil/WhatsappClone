import React from 'react'
import './Chat.css'
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

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
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">
                        Sayed
                    </span>
                    Hello there
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">
                        Hello there
                    </span>
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_receiver">
                    <span className="chat_name">
                        Hello there
                    </span>
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                
                <form>
                    <input type="text" placeholder="Type your message here" />
                    
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <button type="submit">
                        <SendIcon />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
