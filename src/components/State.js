import React, { useState } from 'react'

const State = () => {
    const [counter, setCounter] = useState(0)
    const [toggle, setToggle] = useState(false)

    const incrementer = () => {
        setCounter(counter + 1)
        setCounter((prev) => prev + 1)
    }

    const toggler = () => {
        setToggle(prev => !prev)
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', color: 'white' }}>
            <div className={toggle ? 'active' : ''}>
                <h2>{counter}</h2>
                <button onClick={incrementer}>Click</button>
            </div>
            <button onClick={toggler}>Toggle</button>
        </div>
    )
}

export default State