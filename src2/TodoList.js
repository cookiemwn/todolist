import  React, { Component } from 'react';
import 'antd/dist/antd.css';


import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList} from './store/actionCreators';
import TodoListUI from './TodoListUI';

/*import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/list.json').reply(200, {
    data: ["dell", "lee", "cookie"]
});*/


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();//从store里重新取下数据

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);//订阅 store 的变化， 只要store里面的🈯️值发生改变，就会调用方法handleStoreChange
    }
    render() {
        return <TodoListUI
            list = {this.state.list}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            handleItemDelete = {this.handleItemDelete}
        />
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);

        // console.log(action);
        /*axios.get('/list.json').then((res)=>{
            const data = res.data.data;
            const action = initListAction(data);
            store.dispatch(action);
        })*/

        /*const action = getTodoList();
        store.dispatch(action);*/
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}


export default TodoList;