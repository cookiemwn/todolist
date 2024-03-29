import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
        console.log('componentWillMount')
    }

    render() {
        console.log('parent render')
        return (
            <Fragment>
                {/*占位符，组件*/}
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input }}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul }}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    //组件被挂载在页面之后，自动执行
    componentDidMount(){
        console.log('componentDidMount')
    }

    //组件更新之后
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    //组件被更新之前，自动执行，在shouldComponentUpdate之后
    //如果shouldComponentUpdate 返回 true,  它才会执行
    //如果false, 不执行
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    //组件更新完成之后，被执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }


    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(){
        const value = this.input.value;
        this.setState(()=>({
            inputValue: value
        }))
        /*this.setState({
            inputValue: e.target.value
        })*/
    }

    handleBtnClick(){
        this.setState((prevState)=>({
            list: [...prevState.list,prevState.inputValue],
            inputValue: ''
        }),() =>{
            console.log(this.ul.querySelectorAll('div').length)
        });
    }

    handleItemDelete(index){

        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })
        // this.setState({
        //     //...es6展开运算符
        //     list: list
        // })
    }
}

export default TodoList;