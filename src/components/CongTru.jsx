import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement } from '../redux/counterSlice';
import './CongTru.css';

function CongTru() {
    
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="congtru-container">
            <button 
                onClick={() => dispatch(decrement())} 
                className='btn-tru'
            >
                -
            </button>
            <span>{count}</span>
            <button 
                onClick={() => dispatch(increment())} 
                className='btn-cong'
            >
                +
            </button>
        </div>
    );
}

export default CongTru;
