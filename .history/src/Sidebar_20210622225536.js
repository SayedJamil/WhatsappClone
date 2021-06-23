import React from 'react'
import './Sidebar.css'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="siderbar_headrright">
                    <IconButton>
                        <DataUsageIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>


                </div>
            </div>
        </div>
    )
}

export default Sidebar
