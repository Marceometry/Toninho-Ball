import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BallContextProvider } from './contexts/BallContext'

ReactDOM.render(
  <React.StrictMode>
    <BallContextProvider>
      <App />
    </BallContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)