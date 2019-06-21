import {GET_INIT_LIST,CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionType'


export const getInputChangeAction = (value) => ({
    type: CHANG_INPUT_VALUE,
    value
});

export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getInitList = (data) => ({
    type: GET_INIT_LIST
});

/*
export const getTodoList = ()=>{
    return (dispatch) => {
        axios.get('/list.json').then((res)=>{
            const data = res.data.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
}*/
