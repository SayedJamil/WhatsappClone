import React from 'react'
import './Sidebar.css'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ChatIcon from '@material-ui/icons/Chat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="siderbar_headrright">
                    <IconButton>
                        
                    </IconButton>
                    <DataUsageIcon />
                    <ChatIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
