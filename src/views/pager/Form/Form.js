import React,{Component} from 'react';

class Select extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
    }
   
    handleChange=(event)=> {
      this.setState({value: event.target.value});
    }
   
    handleSubmit=(event)=> {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            选择您最喜欢的网站
            {/* 在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。 */}
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="gg">Google</option>
              <option value="rn">Runoob</option>
              <option value="tb">Taobao</option>
              <option value="fb">Facebook</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
}

class Reservation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
        }
    }

    //当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。
    handleInputChange=(event)=> {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
   
      this.setState({
        [name]: value
      });
    }
   
    render() {
        return (
            <div>
              <form>
                <label>
                    是否离开:
                    <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    访客数:
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange} />
                </label>
              </form>
           </div>
        );
    }
}


class Content extends Component {
    render() {
      return  <div>
              <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
              <h4>{this.props.myDataProp}</h4>
              </div>;
    }
}

class Form extends Component {

    //HTML 表单元素与 React 中的其他 DOM 元素有所不同,因为表单元素生来就保留一些内部状态。
    //在 HTML 当中，像 <input>, <textarea>, 和 <select> 这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。

    constructor(props) {
        super(props);
        this.state = {value: 'Hello!'};
    }

    handleChange=(event)=> {
        this.setState({value: event.target.value});
    }

    render(){

        var value = this.state.value;

        return(
            <div className="form">
                <input type="text" value={value} onChange={this.handleChange} />---{value}<br></br>
                <h4>更新子组件</h4>
                <Content myDataProp = {value} updateStateProp = {this.handleChange}></Content><br></br>
                <h4>select 下拉菜单</h4>
                {/* 在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。 */}
                <Select></Select>
                <h4>多个表单元素</h4>
                <Reservation></Reservation>
            </div>
        )
    }
}

export default Form;