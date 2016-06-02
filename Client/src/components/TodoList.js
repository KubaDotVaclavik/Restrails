import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => 
    <ul>
    {todos.map(todo => 
        <Todo
        key={todo.index}
        {...todo}
        onClick={() => onTodoClick(todo.index)}
        />        
    )}
    </ul>;

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;