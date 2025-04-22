import { useReducer, useState } from 'react';
import './ToDoList.css';

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch({ type: 'ADD_TODO', payload: input });
            setInput('');
        }
    };

    return (
        <div className='toDoCon'>
            <h1>To Do List Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Thêm việc cần làm..."
                />
                <button type="submit">Thêm</button>
            </form>

            <ul>
                {state.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'done' : ''}>
                        <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
