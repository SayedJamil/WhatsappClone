import React from 'react'
import './Sidebar.css'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="siderbar_headrright">
                    <IconButton>
                        <DataUsageIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sider_search">
                <div className="search_container">

                </div>
            </div>
        </div>
    )
}

export default Sidebar
