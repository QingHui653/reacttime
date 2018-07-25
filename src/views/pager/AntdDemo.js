import React, { Component } from 'react';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import SearchBar from './SearchBar';
import Clock from './Clock/Clock';
import './AntdDemo.css';

class AntdDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.changeClick = this.changeClick.bind(this);
    }
    // 这种不会 绑定 this // 需要 进行 手动绑定
    changeClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    // 这种 会 绑定 this
    clickButton =() =>{
        message.loading("loading.....");
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    tip =(tip) =>{
        message.info(tip);
    }

    render() {
        var i=1
        var myStyle= {
            fontSize:16,
            color:'blue'
        }

        // [条件渲染](http://www.runoob.com/react/react-conditional-rendering.html)
        var isLoggedIn= false;
        
        // 可根据不同条件 返回 不同 的 组件
        if(isLoggedIn){
            return <SearchBar />;
        }
        
        return(
            <div className="antdDemo">
                <h1 style = {myStyle}>{i === 1 ? 'True' : 'False'}
                一些 react 基础 使用
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                </h1><br></br>  {/* 建议内联样式表 */}
                <SearchBar searchName="搜索组件"></SearchBar>
                <Clock></Clock>
                <div className ="leftDiv">
                    <span>
                        <Button onClick={this.clickButton} type="primary">clickButton</Button>
                    </span>
                    <span>
                        <Button onClick={this.tip.bind(this,"保存成功")}>tip</Button>
                    </span>
                    <span>
                        <Button onClick={(e)=>this.tip("保存成功2",this)}>tip2</Button>
                    </span>
                    <span>
                        <Button onClick={this.changeClick} type="primary">changeButton</Button>
                    </span>
                </div>
            </div>
        );
    }
}

export default AntdDemo;