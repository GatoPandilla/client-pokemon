import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>GATOS DE MRD</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          LAS VECES QUE ME ROMPIO EL CORAZON {count}
        </button>
        <p>
          <code>TODAS MIENTEN</code>
        </p>
      </div>
    </>
  )
}

export default App
