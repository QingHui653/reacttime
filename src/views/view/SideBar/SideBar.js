import React,{Component} from 'react';
import { Link } from 'react-router-dom'

import './SideBar.css'

class SideBar extends Component {

    render(){
        return(
            <div className="sideBar">
                <div className="sideBarHeader">
                    <span>主题</span>
                </div>
                <ul>
                    <li><Link to="/ReactApi">ReactApi</Link></li>
                    <li><Link to="/Form">Form</Link></li>
                    <li><Link to="/Clock">Clock</Link></li>
                    <li><Link to="/News">News</Link></li>
                </ul>
            </div>
        )
    }
}

export default SideBar;