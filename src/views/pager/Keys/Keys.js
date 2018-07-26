import React,{Component} from 'react';

class Keys extends Component {

    constructor(props){
        super(props);
    }

    render(){
        //Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。
        //元素的 key 只有在它和它的兄弟节点对比时才有意义。
        //比方说，如果你提取出一个 ListItem 组件，你应该把 key 保存在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上。
        const numbers = this.props.numbers;

        const listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );

        return(
            <div className="Keys">
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default Keys;