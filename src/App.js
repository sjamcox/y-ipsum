import React, { useContext } from 'react'
import './App.css'
import Controls from './components/Controls'
import IpsumDisplay from './components/IpsumDisplay'
import { Context } from './Context'
import { motion } from 'framer-motion'

const App = () => {

  const { ipsum } = useContext(Context)

  return (
    <div className="App">
      <header>
        <h1>
          Y Ipsum
        </h1>
      <h3 className="subhead">An ipsum generator using common YMCA lingo.</h3>
      </header>
      <Controls />
        <motion.main
          id="ipsumContainer"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          key={ipsum}
        >
        <IpsumDisplay />
      </motion.main>
    </div>
  )
}

export default App;
