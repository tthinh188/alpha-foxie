import React from 'react'
import "./Header.css"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { Avatar } from "@material-ui/core"
import { useStateValue } from "./StateProvider"

function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <Avatar src="https://i.pinimg.com/originals/da/be/ea/dabeea3f3cf5e435bd7700eaf55c06a3.jpg" alt="" />
                <h4>Alpha-foxie</h4>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://scontent.forf1-3.fna.fbcdn.net/v/t1.0-9/116607019_613009926265569_2852008619302352282_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=dEFfIY9TvcwAX_n5TiB&_nc_ht=scontent.forf1-3.fna&oh=21a244d019f9df18f6ee100be416402c&oe=60171EFE" alt="" />

                    <h4>{user.displayName} </h4>
                </div>
                <div className="header_option">
                    <ExitToAppIcon fontSize="large"></ExitToAppIcon>
                </div>
            </div>
        </div>
    )
}

export default Header
