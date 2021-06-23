import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat_info">
                <h2>Room name</h2>
            </div>
        </div>
    )
}

export default SidebarChat
