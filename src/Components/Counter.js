import React, {useState, useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, counter: state.counter + 1};
            break;
        case "DECREMENT":
            return {...state, counter: state.counter - 1};
            break;
        case "NEUTRAL":
            return {...state, counter: 0};
            break;
        default: 
            return state;
    }
}

const Counter = ( props ) => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    const incrementHandler = () => {
        dispatch({type: "INCREMENT"})
    }

    const decrementHandler = () => {
        dispatch({type: "DECREMENT"})
    }
    const neutralHandler = () => {
        dispatch({type: "NEUTRAL"})
    }

    return (
        <div className='row justify-content-center align-items-center h-100'>
            <div className='col-md-5' style={{border: '5px solid black'}}>
                <h1 className='text-center m-3 fw-bold'>Counter</h1>
                <h2 className='text-center m-3 fw-bold'>{ state.counter }</h2>
                <button onClick={incrementHandler} className='btn btn-success m-3'>Increment</button>
                <button onClick={decrementHandler} className='btn btn-danger m-3'>Decrement</button>
                <button onClick={neutralHandler} className='btn btn-secondary m-3'>Neutral</button>
            </div>
        </div>
    )
}

export default Counter;