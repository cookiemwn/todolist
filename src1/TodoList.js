import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
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

    render() {
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
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('/api/todolist')
            .then((res)=>{
                console.log(res.data);
                this.setState(()=>({
                    list: [...res.data]
                }))
            })
            .catch(()=>{alert('error')})
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

    handleInputChange(e){
        const value = e.target.value;
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
        }));
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