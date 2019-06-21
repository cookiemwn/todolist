import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    //Provider 连接了 store, 其内部组件都有能力获取 store 里的内容。
    <Provider store={store}>
        <TodoList/>
    </Provider>
)



ReactDOM.render(App, document.getElementById('root'));