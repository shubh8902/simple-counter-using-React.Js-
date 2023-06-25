import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);
    const initialCount = 0;
    // const increment = () => {
    //     setCount(count + 1);
    // };
    // const decrement = () => {
    //     setCount(count - 1);
    // };
    const handleReset = () => {
        setCount(initialCount);
    }
    return (
        <div className="main-container">
            <h1>Simple Counter</h1>
            <div className="counter">
                <p className='count'>{count}</p>
            </div>
            <div className="buttons">
                <button className='btn-minus' onClick={() => { setCount(count - 1) }}>Decrease</button>
                <button className='btn-minus' onClick={handleReset}>Reset</button>
                <button className='btn-plus' onClick={() => { setCount(count + 1) }}>Increase</button>
            </div>
        </div>
    )
}

export default App;