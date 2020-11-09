import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from "@material-ui/core/Avatar"

function Header() {
    return (
        <div className="header">

            <div className="header_left">
                <MenuIcon />
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
            </div>
            <div className="header_input">
                <input type="text" placeholder="Search" className="header_input_search" />
                <SearchIcon className="header_inputButton" />
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar alt="" src="https://avatars2.githubusercontent.com/u/1678753?s=460&u=befae31017f11ecb2f5be59dd3ceb7e964508bd4&v=4" />
            </div>
        </div>
    )
}

export default Header

