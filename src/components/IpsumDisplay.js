import React, { useContext } from 'react'
import { Context } from '../Context'

const IpsumDisplay = () => {

    const { ipsum } = useContext(Context)
    const ipsumBlock = ipsum.map(text => <p>{text}</p>)

    return (
        <div id="ipsum-container">
            {ipsumBlock}
        </div>
    )
}

export default IpsumDisplay