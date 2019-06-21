import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const { inputValue, list, handleClick, changInputValue } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// state 指 store里面的数据，State To Props 映射
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changInputValue(e){
            const action= {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick(){
            const action= {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}

//connect 连接， TodoList 和 store连接， 映射关系(mapStateToProps),State 映射到 Props
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);