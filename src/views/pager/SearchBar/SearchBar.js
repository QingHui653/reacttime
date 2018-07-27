import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input,Button,DatePicker  } from 'antd';

import './SearchBar.css';


function onChange(date, dateString) {
    console.log(date, dateString);
}

class SearchBar extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
           header: "Header from state...",
           content: "Content from state..."
        }
    };


    render(){
        // props 通常 用于 父子 组件 传递 .类似 freemark 的 组件属性
        // 可选 [校验类型](http://www.runoob.com/react/react-props.html)
        var searchName = this.props.searchName;

        return(
            
            <div className="searchBar">
                <h3>{searchName}</h3>
                <h4>{this.state.header}</h4>
                <h4>{this.state.content}</h4>
                <Row>
                    <Col span={5}>
                        <div>
                            <label>姓名: </label><Input /> 
                        </div>
                    </Col>
                    <Col span={5}>
                        <div>
                            <label>姓名: </label><Input /> 
                        </div>
                    </Col>
                    <Col span={5}>
                        <div>
                            <label>日期: </label><DatePicker onChange={onChange} />
                        </div>
                    </Col>
                    <Col span={5}>
                        <div>
                            <label>姓名: </label><Input /> 
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="searchGroup">
                            <Button className="searchBtn" type="primary" size="small">搜索</Button>
                            <Button className="reSetBtn" type="primary" size="small">重置</Button>
                            <a>展开</a>
                        </div>
                    </Col>
                </Row>
                <br></br>
            </div>
        )
    }    
}

export default SearchBar;