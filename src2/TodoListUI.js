import React from 'react';
import { Input, Button, List } from 'antd';

//当一个组件只有render函数时，替换为无状态组件（一个函数）
const TodoListUI = (props)=> {
    return (
        <div style={{margin: '10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder="todo info"
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{marginTop: '10px', width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={()=> {props.handleItemDelete(index)}}> {item}</List.Item>)}
            />
        </div>
    )
}
/*class TodoListUI extends Component {
    render(){
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        placeholder="todo info"
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width:'300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=> {this.props.handleItemDelete(index)}}> {item}</List.Item>)}
                />
            </div>
        )
    }
}*/

export default TodoListUI;