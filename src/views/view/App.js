import React,{Component} from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';

import './App.css';

class App extends Component {

    render(){
        return(
            <div className="app">
                <Header />
                <SideBar/>
                <Main />
            </div>
        )
    }
}

export default App;