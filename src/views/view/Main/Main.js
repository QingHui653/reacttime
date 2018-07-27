import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import Clock from '../../pager/Clock/Clock'
import ReactApi from '../../pager/ReactApi/ReactApi'
import Form from '../../pager/Form/Form'

import './Main.css'

class Main extends Component {

    render(){
        return(
            <div className="main">
                <Switch>
                    <Route exact path='/Clock' component={Clock}/>
                    <Route path='/ReactApi' component={ReactApi}/>
                    <Route path='/Form' component={Form}/>
                </Switch>
            </div>
        )
    }
}

export default Main;