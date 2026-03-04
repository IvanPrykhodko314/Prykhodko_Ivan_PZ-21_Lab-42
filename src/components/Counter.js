import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/actions';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Лічильник: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default Counter;

