import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList(props) {
    
    const [todos, settodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        settodos(newTodos);
    }
const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id == id) {
            todo.isComplete = !todo.isComplete; 
        }
        return todo;
    });
    settodos(updatedTodos);
};

const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    settodos(removeArr);
}

const updateTodo = (todoId, newVal) => {
    if(!newVal.text || /^\s*$/.test(newVal.text)) {
        return;
    }
    settodos(prev => prev.map(item => (item.id === todoId? newVal: item))
    );
}

    return (
        <div>
            <h1>What's the Plan for Today ?</h1>
            < TodoForm onSubmit={ addTodo }/>
            < Todo todos={todos} completeTodo ={completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo} />
        </div>
    );
}

export default TodoList;