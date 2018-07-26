import React,{Component} from 'react';

class ReactApi extends Component {

    constructor(props) {
        super(props);
        this.state = {clickCount: 0};
    }
    
    setStateClick=()=>{
        //setState(object nextState[, function callback])
        //nextState，将要设置的新状态，该状态会和当前的state合并
        //callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
        //合并nextState和当前state，并重新渲染组件
        this.setState(function(state) {
            return {clickCount: state.clickCount + 1};
        });
    }

    replaceStateClick=()=>{
        this.replaceState({count : this.state.count+1},function(){
            console.log("replaceState:");
            console.log(this.state);
        });
    }

    // replaceState
    // setProps
    // replaceProps
    // forceUpdate
    // findDOMNode
    // isMounted

    render(){
        return(
            <div className="ReactApi">
                <h2 onClick={this.setStateClick}>setState 点我！点击次数为: {this.state.clickCount}</h2>
            </div>
        )
    }
}

export default ReactApi;