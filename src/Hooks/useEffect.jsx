import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(0);

    // only use firts time when project is render to log the value otherwise not log because arrya dependancy is empty value.
    // peli var jyre user website open kare tyre aekjj var kay changes karva hoy tyre usesate ma array dependancy ni jarur pade.
    // useEffect(() => {
    //     console.log("Hi");
    // }, []);

    useEffect(() => {
        document.title = `Chats(${num})`;
    });

    return (
        <div className='center_div'>
            <p>{num}</p>
            <div className='button2' onClick={() => setNum(num + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Incr +
            </div>
        </div>
    )
}

export default UseEffect