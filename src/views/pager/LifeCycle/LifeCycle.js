import React,{Component} from 'react';

class LifeCycle extends Component {

    constructor(props){
        super(props);
        this.state = {opacity: 1.0};
    }
    //在渲染前调用,在客户端也在服务端。
    componentWillMount=()=>{
        console.log('Component WILL MOUNT!')
    }
    //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    //React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。
    //当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。
    componentDidMount(){
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
              opacity = 1.0;
            }
            this.setState({
              opacity: opacity
            });
          }.bind(this), 100);
    }
    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps =()=>{
        console.log('Component WILL RECEIVE PROPS!')
    }
    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
    //可以在你确认不需要更新组件时使用。
    shouldComponentUpdate =()=>{
        return true;
    }
    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate=()=>{
        console.log('Component WILL UPDATE!');
    }
    //在组件完成更新后立即调用。在初始化时不会被调用
    componentDidUpdate =()=>{
        console.log('Component DID UPDATE!')
    }
    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount=()=>{
        console.log('Component WILL UNMOUNT!')
    }


    render(){
        return(
            <div className="LifeCycle">
                <div style={{opacity: this.state.opacity}}>
                    Hello {this.props.name}
                </div>
            </div>
        )
    }
}

export default LifeCycle;