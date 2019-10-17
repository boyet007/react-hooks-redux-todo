import React from 'react'
import { connect } from 'react-redux'
import { toggleTodoComplete, deleteTodoAction } from '../redux'

const TodoList = (props) => {
    const todos = props
    console.log('props')
    console.log(todos)
    const toggleComplete = (todoId) => props.toggleTodoComplete(todoId)
    const deleteTodo = (todoId) => props.deleteTodoAction(todoId)
    return <div>
        <ul className="todo-list">
            { todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox"
                        checked={todo.complete}
                        onChange={toggleComplete(todo.Id)} />
                        <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                        <span className="delete-button" 
                            onClick={deleteTodo.bind(todo.id)}>X</span></li>
            )) } 
        </ul>
    </div>;
}
 
const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, {toggleTodoComplete, deleteTodoAction})(TodoList)