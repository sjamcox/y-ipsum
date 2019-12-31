import React, { useContext } from 'react'
import { Context } from '../Context'

const Controls = () => {
    
    const { count, setCount, createIpsum } = useContext(Context)
    
    return (
        <div className="controls">
            <div className="paragraph-selector">
                <p>Number of paragraphs</p>
                <select onChange={(e) => setCount(e.target.value)} value={count}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button onClick={createIpsum}>Generate Ipsum</button>
        </div>
    )
}

export default Controls
