import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { KorzinkaProvider } from './components/Korzinka/KorzinkaContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <KorzinkaProvider>
    <App />
      </KorzinkaProvider>
      </BrowserRouter >
  </React.StrictMode>,
)
