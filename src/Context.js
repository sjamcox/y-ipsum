import React, { useState, useEffect } from 'react'
import data from './data'
const Context = React.createContext(null)

const ContextProvider = ({ children }) => {

    const [ ipsum, setIpsum ] = useState([])
    const [ count, setCount ] = useState(1)

    function createIpsum() {
        const newIpsum = []
        for (let k = 0; k < count; k++) {
            const numSentences = Math.floor(Math.random() * 2) + 3
            let ipsumParagraph = ""
            for (let i = 0; i < numSentences; i++) {
                const numWords = Math.floor(Math.random() * 7) + 10
                let ipsumString = ""
                for (let j = 0; j < numWords; j++) {
                    const randomIndex = Math.floor(Math.random() * data.length)
                    ipsumString = `${ipsumString} ${data[randomIndex]}`
                }
                const ipsumRemoveSpace = ipsumString.substr(1)
                const IpsumSentence = ipsumRemoveSpace.charAt(0).toUpperCase() + ipsumRemoveSpace.slice(1) + `.`
                ipsumParagraph = `${ipsumParagraph} ${IpsumSentence}`
            }
            const finalIpsumParagraph = ipsumParagraph.substr(1)
            newIpsum.push(finalIpsumParagraph)
        }
        setIpsum(newIpsum)
    }

    useEffect(() => (
        createIpsum()
    ), [])
    
    return (
        <Context.Provider value={{ipsum, setIpsum, count, setCount, createIpsum}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}