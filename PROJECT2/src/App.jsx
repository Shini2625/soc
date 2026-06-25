import { useState } from 'react'
import Ui from './components/ui'

import './App.css'

function App() {
  const [showUi, setShowUi] = useState(false)
 
  return (
    <div className="app-root">
      {!showUi ? (
        <button id="start" onClick={() => setShowUi(true)}>Lets start!</button>
      ) : (
        <Ui />
      )}
    </div>
  )
}

export default App
