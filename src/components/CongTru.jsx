import { useReducer } from 'react';
import './CongTru.css';

const initState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

function CongTru() {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div className="congtru-container">
            <button 
                onClick={() => dispatch({ type: 'DECREMENT' })} 
                className='btn-tru'
            >
                -
            </button>
            <span>{count}</span>
            <button 
                onClick={() => dispatch({ type: 'INCREMENT' })} 
                className='btn-cong'
            >
                +
            </button>
        </div>
    );
}

export default CongTru;
