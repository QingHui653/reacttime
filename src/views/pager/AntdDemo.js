import React, { Component } from 'react';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import SearchBar from './SearchBar';
import './AntdDemo.css';

class AntdDemo extends Component {

    clickButton =() =>{
        message.loading("loading.....");
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
        
        return(
            <div className="antdDemo">
                <h1 style = {myStyle}>{i === 1 ? 'True' : 'False'}一些 react 基础 使用</h1><br></br>  {/* 建议内联样式表 */}
                <SearchBar searchName="搜索组件"></SearchBar>
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
                </div>
            </div>
        )
    }
}

export default AntdDemo;