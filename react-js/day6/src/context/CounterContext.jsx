import React, { createContext, useState } from 'react'

export const counterContext = createContext()

const CounterContext = ({ children }) => {
    const [count, setCount] = useState(0)
    const counterObj = { count, setCount }
    return (
        <div>
            <counterContext.Provider value={counterObj}>
                {children}
            </counterContext.Provider>
        </div>
    )
}
export default CounterContext;