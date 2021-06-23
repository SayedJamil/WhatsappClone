import React, { useState } from 'react'
import './Chat.css'
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'

function Chat({ messages }) {

    const [input, setInput] = useState('')
    const sendMessage = (e) => {
        e.preventDefault();
        axios.post('/messages/new', {
            message: input,
            name: "Jams"
            timestamp: "29/08/1999",
            
})
    }
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
                {messages.map((message) => (
                    <p className={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className="chat_name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form >
                    <input value={input}
                        onChange={(e) => setInput(e.target.value)} type="text"
                        placeholder="Type your message here" />

                    <IconButton type="submit">
                        <MicIcon />
                    </IconButton>
                    <IconButton onClick={sendMessage} type="submit">
                        <SendIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Chat
