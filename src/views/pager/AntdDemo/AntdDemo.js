import React, { Component } from 'react';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
// 自有组件
import SearchBar from './SearchBar/SearchBar';
import Clock from './Clock/Clock';
import Keys from './Keys/Keys';
import LifeCycle from './LifeCycle/LifeCycle';
import ReactApi from './ReactApi/ReactApi';
import Refs from './Refs/Refs';
import Form from './Form/Form';

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
        const numbers = [5, 2, 3, 4, 5];

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
                <div className="components">
                    <h4>1. 搜索组件: props,state</h4>
                    <SearchBar searchName="搜索组件"></SearchBar>
                    <h4>2. 日期组件: props,state,js 修改state</h4>
                    <Clock></Clock>
                    <h4>3. 数组组件: 数组key </h4>
                    <Keys numbers={numbers}></Keys>
                    <h4>4. ReactApi组件: ReactApi </h4>
                    <ReactApi></ReactApi>
                    <h4>5. LifeCycle组件: 生命周期 </h4>
                    <LifeCycle name="world"></LifeCycle>
                    <h4>5. Refs组件: refs </h4>
                    <Refs></Refs>
                    <h4>6. Form组件: form </h4>
                    <Form></Form>
                </div>
            </div>
        );
    }
}

export default AntdDemo;