import React,{Component} from 'react';

class Clock extends Component {

    constructor(props){
        super(props);
        this.state={
            date:new Date()
        };
    }
    // react 的 生命周期
    // 挂载一个 定时任务
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    // componentDidCatch
    // componentDidUpdate
    // componentWillMount
    // componentWillReceiveProps
    // componentWillUpdate

    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return(
            <div className="clock">
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;