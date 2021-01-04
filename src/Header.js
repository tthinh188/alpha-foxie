import React from 'react'
import "./Header.css"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import {Avatar} from "@material-ui/core"

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar src="https://i.pinimg.com/originals/da/be/ea/dabeea3f3cf5e435bd7700eaf55c06a3.jpg" alt=""/>
                <h4>Alpha-foxie</h4>
            </div>
            
            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://i.pinimg.com/originals/da/be/ea/dabeea3f3cf5e435bd7700eaf55c06a3.jpg" alt=""/>

                    <h4>User name (add later) </h4>
                </div>
                <div className="header_option">
                    <ExitToAppIcon fontSize="large"></ExitToAppIcon>
                </div>
            </div>
        </div>
    )
}

export default Header
