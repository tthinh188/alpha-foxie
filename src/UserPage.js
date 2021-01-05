import React from 'react'
import "./UserPage.css"
import Header from "./Header"
import QuestionBox from "./QuestionBox"

function UserPage() {
    return (
        <div className="user_page">
            <Header/>
            <QuestionBox/>
        </div>
    )
}

export default UserPage
