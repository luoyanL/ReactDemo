import React from "react"
import {Link} from "react-router-dom"

export default class NavigationBar extends React.Component{
    render(){
        return (
            <div className="container">
                <ul className="nav nav-pills">
            <li role="presentation" className="active">
                <Link to="/">登录</Link>
            </li>
            <li role="presentation">
                <Link to="/signup">注册</Link>    
            </li>
          </ul>
            </div>
            
        )
    }
}