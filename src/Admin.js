import React from 'react'
import "./Admin.css"
import Header from "./Header"
import AddQuestion from "./AddQuestion"

function Admin() {
    return (
        <div className="admin">
            <Header/>
            <div className="body">
                <AddQuestion/>
            </div>
        </div>
    );
}

export default Admin
