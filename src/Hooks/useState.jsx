import React, { useState } from 'react';
import "./style.css";

const UseState = () => {
    const initialValue = 10;
    const [num, setNum] = useState(initialValue);

    return (
        <>
            <div className='center_div'>
                <p>{num}</p>
                <div className='button2' onClick={() => setNum(num + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Incr +
                </div>
                <div className='button2' onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decr -
                </div>
            </div>
        </>
    )
}

export default UseState