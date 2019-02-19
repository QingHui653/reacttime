import React,{Component} from 'react';

import './Header.css'

class App extends Component {

    render(){
        return(
            <div className="header">
                <div>左标签</div>
                <div>右标签 存放 消息.头像</div>
            </div>
        )
    }
}

export default App;