import ReactDom from 'react-dom/client'
import React from 'react'
import App from './App'

ReactDom.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
