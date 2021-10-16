import React, {useState} from 'react';

const Counter = ( props ) => {
    const [counter, setCounter] = useState(0);
    const incrementHandler = () => {
        setCounter(counter + 1);
    }

    const decrementHandler = () => {
        setCounter(counter - 1);
    }

    const neutralHandler = () => {
        setCounter(0);
    }

    return (
        <div className='row justify-content-center align-items-center'>
            <div className='col-md-5' style={{border: '5px solid black'}}>
                <h1 className='text-center m-3 fw-bold'>Counter</h1>
                <h2 className='text-center m-3 fw-bold'>{ counter }</h2>
                <button onClick={incrementHandler} className='btn btn-success m-3'>Increment</button>
                <button onClick={decrementHandler} className='btn btn-danger m-3'>Decrement</button>
                <button onClick={neutralHandler} className='btn btn-secondary m-3'>Neutral</button>
            </div>
        </div>
    )
}

export default Counter;