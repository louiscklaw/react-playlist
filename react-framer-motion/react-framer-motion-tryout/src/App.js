import React from 'react'
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext'

import { motion } from 'framer-motion'

import './styles.css'

function App({ test_branch = false }) {
  let helloworld = 'helloworld'
  let helloanotherworld = '123'

  let helloEmpty

  if (test_branch) {
    console.log('find true')
  } else {
    console.log('find false')
  }

  console.log('helloEmpty', helloEmpty)

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <motion.div initial={{ opacity: 0, y: -300 }} animate={{ opacity: 1, y: 200 }}>
          Hello World!
        </motion.div> */}
        <motion.div
          initial={{ left: 0, opacity: 0 }}
          animate={{ opacity: 1, y: 300 }}
          transition={{ duration: 6 }}
        >
          hello another world
        </motion.div>

        <div className="example-container">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      </GlobalContextProvider>
    </div>
  )
}

export default App
