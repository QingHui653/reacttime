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